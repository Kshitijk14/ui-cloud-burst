# Import necessary libraries
import requests
import pandas as pd

# Define the API endpoint and parameters
# api_url = "https://archive-api.open-meteo.com/v1/archive?latitude=30.3229&longitude=78.0317&start_date=2023-08-24&end_date=2023-09-07&hourly=temperature_2m,relativehumidity_2m,precipitation,cloudcover,et0_fao_evapotranspiration"
api_url = "https://archive-api.open-meteo.com/v1/archive"
params = {
    'latitude' : '30.3229',
    'longitude' : '78.0317',
    'start_date' : '2017-09-07',
    'end_date' : '2023-09-07',
    'hourly' : 'relativehumidity_2m, precipitation, cloudcover, et0_fao_evapotranspiration'
}

# Make an API request to fetch weather data
response = requests.get(api_url, params=params)

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()
    
    # Create a DataFrame from the data
    df = pd.DataFrame(data["hourly"])
    
    # Save the data to a CSV file
    df.to_csv("weather_data.csv", index=False)
    
    print("Data saved to 'weather_data.csv'")
else:
    print("Failed to fetch data. Check the API URL and parameters.")