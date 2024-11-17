import React, { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
// import { database } from "./firebaseConfig";
import { database } from "../firebaseConfig";
// import { predict } from "./mlModel";
import { predict } from "../mlModel";
// import HomePage from "./HomePage";

const SensorData = () => {
  const [humidity, setHumidity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [rain, setRain] = useState(null);
  const [prediction, setPrediction] = useState("Calculating...");

  useEffect(() => {
    const humidityRef = ref(database, "DHT_11/Humidity");
    const temperatureRef = ref(database, "DHT_11/Temperature");
    const rainRef = ref(database, "Precipitation/Rain");

    onValue(humidityRef, (snapshot) => setHumidity(snapshot.val()));
    onValue(temperatureRef, (snapshot) => setTemperature(snapshot.val()));
    onValue(rainRef, (snapshot) => setRain(snapshot.val()));

    return () => {
      off(humidityRef);
      off(temperatureRef);
      off(rainRef);
    };
  }, []);

  useEffect(() => {
    if (humidity !== null && temperature !== null && rain !== null) {
      setPrediction("Calculating...");

      const timer = setTimeout(() => {
        setPrediction(predict(humidity, temperature, rain));
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [humidity, temperature, rain]);

  return (

    <div>
      {/* <HomePage /> */}
      <p>Rain: {rain !== null ? rain : "..."}</p>
      <p>Humidity: {humidity !== null ? `${humidity}%` : "..."}</p>
      <p>Temperature: {temperature !== null ? `${temperature}°C` : "..."}</p>
      <p>Predicted: {prediction !== null ? prediction : "Calculating..."}</p>
    </div>
  );
};

export default SensorData;
