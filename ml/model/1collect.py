# Import necessary libraries
import requests
import pandas as pd

# Define the API endpoint and parameters
api_url = "https://api.open-meteo.com/v1/forecast"
params = {
    "daily": "rain_sum",
    'latitude' : '30.3229',
    'longitude' : '78.0317',
    'timezone' : 'Asia/Kolkata',
    'start_date' : '2022-12-01',
    'end_date' : '2023-09-01',
    'hourly' : 'temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,pressure_msl,surface_pressure,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,evapotranspiration,et0_fao_evapotranspiration,vapor_pressure_deficit,windspeed_10m,windspeed_80m,windspeed_120m,windspeed_180m,windgusts_10m,temperature_80m,temperature_120m,temperature_180m',
}

# Make an API request to fetch weather data
response = requests.get(api_url, params=params)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()
    # Convert data to a DataFrame for further processing
    df = pd.DataFrame(data["hourly"])
else:
    print("Failed to fetch data. Check the API URL and parameters.")

# Save the data to a CSV file for future use
df.to_csv("weather_data.csv", index=False)