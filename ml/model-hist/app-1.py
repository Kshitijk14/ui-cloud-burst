import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
from sklearn.impute import SimpleImputer
from sklearn.metrics import r2_score
import numpy as np

# Read the CSV file into a DataFrame
data1 = pd.read_csv('weather_data(combined).csv')

# Create a copy of data1 in data2 (optional, you can directly use data1)
data2 = data1.copy()

# Define the columns and weights
parameters_to_keep = [
    'precipitation',
    'relativehumidity_2m',
    'cloudcover',
    'et0_fao_evapotranspiration',
]
weights = [
    0.45,   # precipitation
    0.1,    # relativehumidity_2m
    0.25,   # cloudcover
    0.1,    # et0_fao_evapotranspiration
]

# Calculate the dot product and assign it to a new column 'RelativeProbability'
data2['RelativeProbability'] = data2[parameters_to_keep].dot(weights)

# Print the updated DataFrame
data3 = pd.DataFrame(data2)
data3 = data3.drop(columns=['time'])
data3

X = data3[['temperature_2m','relativehumidity_2m','precipitation','cloudcover','et0_fao_evapotranspiration','RelativeProbability']]
y = data3['RelativeProbability']
            
# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Random Forest Regressor
regressor = RandomForestRegressor(random_state=42)
regressor.fit(X_train, y_train)

# Make predictions on the test set
y_pred = regressor.predict(X_test)

# Calculate the Mean Squared Error (MSE) to evaluate the model's performance
r2 = r2_score(y_test, y_pred)

print(f'R-squared (R^2) error: {r2}')
# Plot the predicted vs. actual cloudburst likelihood
plt.scatter(y_test, y_pred, color='blue', label='Predicted')  # Scatter plot for y_pred with blue color
plt.scatter(y_test, y_test, color='red', label='Actual')  # Scatter plot for y_test with red color
plt.xlabel('Actual Values (y_test)')
plt.ylabel('Predicted Values (y_pred)')
plt.title('Actual vs Predicted Values')
plt.legend()  # Add legend to differentiate the scatter plots
plt.show()