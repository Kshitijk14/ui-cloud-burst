/*
// extract monthly rainfall from CHRIPS
var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
var roi = countries.filter(ee.Filter.eq('country_na', "India"));
Map.addLayer(roi,{}, 'roi');
Map.centerObject(roi);

// list of yr n months
var years = ee.List.sequence(1981, 2023);
var months = ee.List.sequence(1, 12);
var rainfall = ee.ImageCollection("UCSB-CHG/CHIRPS/PENTAD").select('precipitation');
print(rainfall.first());

// Map over the years and create a monthly totals collection
var monthlyImagery = years.map(function(year) {
    return months.map(function(month) {
        var filtered = rainfall.filter(ee.Filter.calendarRange(year, year, 'year')).filter(ee.Filter.calendarRange(month, month, 'month'))
        var monthly = filtered.sum()
        return monthly.set({'year': year, 'month': month})
    })
}).flatten();
var monthlyCol = ee.ImageCollection.fromImages(monthlyImagery);
print(monthlyCol.first());

// Zonal Statistics
var rainfallUK = monthlyCol.map(function(img) {
    var features = roi.map(function(f) {
        return f.set('month', img.get('month'), 'year', img.get('year'));
    })
    var proj = ee.Image(monthlyCol.first()).projection();
    return img.reduceRegions(features, ee.Reducer.mean(), 1000, proj);
}).flatten();
print("Rainfall Summary Mean: ", rainfallUK.limit(10));

//  Export csv to drive
var selectors = 'month, year, country_na, mean, rainfall_mean, rainfall';

Export.table.toDrive({
    collection: rainfallUK,
    description: 'Rainfall_Timeseries',
    folder: 'Rainfall_Timeseries',
    fileNamePrefix: 'Rainfall_Timeseries',
    fileFormat: 'CSV',
    selectors: selectors
})
*/

// extract rainfall
var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
var roi = countries.filter(ee.Filter.eq('country_na', "India"));
Map.addLayer(roi,{}, 'roi');
Map.centerObject(roi);

// List of years, months, days, and hours
var years = ee.List.sequence(2000, 2023); // Modify the year range as needed
var months = ee.List.sequence(1, 12);
var days = ee.List.sequence(1, 28); // Modify as needed
var hours = ee.List.sequence(0, 23);

// Load the GSMaP ImageCollection
var gsmRadar = ee.ImageCollection("JAXA/GPM_L3/GSMaP/v6/operational");

// Function to calculate hourly statistics
var calculateHourlyStatistics = function(year, month, day, hour) {
  var startDate = ee.Date.fromYMD(year, month, day).advance(hour, 'hour');
  
  // Filter the GSMaP data for the specified date and time
  var hourlyData = gsmRadar
    .filterDate(startDate, startDate.advance(1, 'hour'))
    .mean()
    .set({
      'year': year,
      'month': month,
      'day': day,
      'hour': hour
    });
    
  return hourlyData;
};

// Map over years, months, days, and hours
var hourlyImagery = years.map(function(year) {
  return months.map(function(month) {
    return days.map(function(day) {
      return hours.map(function(hour) {
        return calculateHourlyStatistics(year, month, day, hour);
      });
    });
  });
}).flatten();

var hourlyCol = ee.ImageCollection.fromImages(hourlyImagery);
print(hourlyCol.first());