import pandas as pd
from sklearn.preprocessing import MinMaxScaler

# Load your dataset (replace 'your_dataset.csv' with your dataset's file path)
data = pd.read_csv('weather_data.csv')

# Ensure that all remaining columns contain only numeric values
data = data.apply(pd.to_numeric, errors='coerce')

# Define the list of meteorological parameters to keep
parameters_to_keep = [
    'precipitation',
    'relativehumidity_2m',
    'cloudcover',
    'evapotranspiration',
]

# Assign weights to the parameters you want to keep
weights = [
    0.45,   # precipitation
    0.1,    # relativehumidity_2m
    0.25,   # cloudcover
    0.1,    # evapotranspiration
]

# Normalize the parameter values using Min-Max scaling
scaler = MinMaxScaler()
data[parameters_to_keep] = scaler.fit_transform(data[parameters_to_keep])

# Calculate the relative probability for each row
data['RelativeProbability'] = data[parameters_to_keep].dot(weights)

# Drop unnecessary columns (replace 'columns_to_drop' with the columns you want to remove)
columns_to_drop = [
    'temperature_2m',
    'precipitation_probability',
    'pressure_msl',
    'surface_pressure',
    'cloudcover_low',
    'cloudcover_mid',
    'cloudcover_high',
    'et0_fao_evapotranspiration',
    'windspeed_10m',
    'windspeed_80m',
    'windspeed_120m',
    'windspeed_180m',
    'windgusts_10m',
    'temperature_80m',
    'temperature_120m',
    'temperature_180m',
]

data.drop(columns=columns_to_drop, inplace=True)

# Save the updated dataset to a new CSV file
data.to_csv('dataset_with_relative_probability.csv', index=False)