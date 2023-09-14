import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.ensemble import HistGradientBoostingRegressor
from sklearn.metrics import mean_squared_error

# Load the dataset with relative probability (replace 'dataset_with_relative_probability.csv' with your dataset file)
data = pd.read_csv('dataset_with_relative_probability.csv')

# Define the target variable (cloudburst likelihood)
y = data['RelativeProbability']

# Define the features
X = data.drop(columns=['RelativeProbability'])

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Random Forest Regressor
regressor = HistGradientBoostingRegressor(random_state=42)
regressor.fit(X_train, y_train)

# Make predictions on the test set
y_pred = regressor.predict(X_test)

# Calculate the Mean Squared Error (MSE) to evaluate the model's performance
mse = mean_squared_error(y_test, y_pred)
print(f'Mean Squared Error: {mse}')

# Plot the predicted vs. actual cloudburst likelihood
plt.figure(figsize=(8, 6))
plt.scatter(y_test, y_pred, alpha=0.5)
plt.xlabel('Actual Cloudburst Likelihood')
plt.ylabel('Predicted Cloudburst Likelihood')
plt.title('Actual vs. Predicted Cloudburst Likelihood')
plt.show()