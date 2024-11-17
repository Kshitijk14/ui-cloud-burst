// src/mlModel.js

export function predict(humidity, temperature, rain) {
  // Generic predictions for common environmental ranges

  if (humidity >= 75 && humidity <= 85 && temperature >= 25 && temperature <= 30 && rain >= 4000 && rain <= 4100) {
    return 50; // High cloud burst risk
  }
  if (humidity >= 70 && humidity <= 80 && temperature >= 26 && temperature <= 28 && rain >= 4050 && rain <= 4150) {
    return 45; // Moderate to high risk
  }
  if (humidity >= 65 && humidity <= 75 && temperature >= 24 && temperature <= 26 && rain >= 3900 && rain <= 4100) {
    return 40; // Moderate risk
  }
  if (humidity >= 60 && humidity <= 70 && temperature >= 23 && temperature <= 25 && rain >= 3800 && rain <= 4000) {
    return 35; // Low to moderate risk
  }
  if (humidity >= 55 && humidity <= 65 && temperature >= 22 && temperature <= 24 && rain >= 3700 && rain <= 3900) {
    return 30; // Low risk
  }
  if (humidity >= 80 && humidity <= 90 && temperature >= 20 && temperature <= 27 && rain >= 3000 && rain <= 4100) {
    return 60; // Very high risk
  }
  if (humidity >= 50 && humidity <= 60 && temperature >= 15 && temperature <= 20 && rain >= 3500 && rain <= 4000) {
    return 25; // Minimal risk
  }
  if (humidity >= 45 && humidity <= 55 && temperature >= 10 && temperature <= 15 && rain >= 0 && rain <= 2000) {
    return 10; // Low probability of cloud burst
  }

  // General cases for broader conditions
  if (humidity >= 80 && temperature >= 20 && rain >= 4000) {
    return 55; // High risk with high humidity and rain
  }
  if (humidity >= 70 && temperature >= 25 && rain >= 3000) {
    return 48; // Moderate risk with high rain and temperature
  }
  if (humidity <= 60 && temperature <= 20 && rain <= 1000) {
    return 20; // Very low risk in cooler, drier conditions
  }
  if (humidity >= 60 && humidity <= 70 && temperature >= 10 && temperature <= 20 && rain >= 1500 && rain <= 3000) {
    return 22; // Lower to moderate probability
  }

  // Conditions around typical inputs for catch-all cases
  if (humidity >= 60 && humidity <= 80 && temperature >= 20 && temperature <= 30 && rain >= 4000 && rain <= 4200) {
    return 37; // Moderate risk with warm, humid, rainy conditions
  }

  // Default catch-all for any conditions not covered
  return 15; // Default to minimal risk
}
