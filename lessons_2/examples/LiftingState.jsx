// LiftingState.jsx - Lifting state up to share between siblings
import React, { useState } from "react";

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = { c: "Celsius", f: "Fahrenheit" };

  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem" }}>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        style={{ fontSize: "1.2rem", padding: "0.5rem" }}
      />
    </fieldset>
  );
}

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <p style={{ color: "red", fontWeight: "bold" }}>💨 The water would boil!</p>;
  }
  return <p style={{ color: "blue" }}>❄️ The water would NOT boil.</p>;
}

function toCelsius(f) { return ((f - 32) * 5) / 9; }
function toFahrenheit(c) { return (c * 9) / 5 + 32; }

function LiftingState() {
  // State is "lifted" to the common parent
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temp) => { setTemperature(temp); setScale("c"); };
  const handleFahrenheitChange = (temp) => { setTemperature(temp); setScale("f"); };

  const celsius = scale === "f" ? toCelsius(parseFloat(temperature)) : parseFloat(temperature);
  const fahrenheit = scale === "c" ? toFahrenheit(parseFloat(temperature)) : parseFloat(temperature);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Temperature Converter</h1>
      <p>This demonstrates lifting state — both inputs share the same data.</p>
      <TemperatureInput scale="c" temperature={scale === "c" ? temperature : celsius.toFixed(1)} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale="f" temperature={scale === "f" ? temperature : fahrenheit.toFixed(1)} onTemperatureChange={handleFahrenheitChange} />
      {temperature !== "" && <BoilingVerdict celsius={celsius} />}
    </div>
  );
}

export default LiftingState;
