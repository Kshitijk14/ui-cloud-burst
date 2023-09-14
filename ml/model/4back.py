# Import necessary Flask libraries
from flask import Flask, request, jsonify
import joblib

# Initialize Flask app
app = Flask(__name__)

# Load the trained model
model = joblib.load("cloudburst_model.pkl")

# Define a route for making predictions
@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get data from the request
        data = request.json
        # Perform prediction
        prediction = model.predict([data["features"]])
        return jsonify({"prediction": prediction[0]})
    except Exception as e:
        return jsonify({"error": str(e)})

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)