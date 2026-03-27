import React, { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");

  const moods = ["😊 Happy", "😢 Sad", "😡 Angry", "😴 Tired"];

  return (
    <div className="container">
      <h1>Mood Tracker</h1>

      <p>Select your mood:</p>

      <div className="buttons">
        {moods.map((m, index) => (
          <button key={index} onClick={() => setMood(m)}>
            {m}
          </button>
        ))}
      </div>

      {mood && (
        <div className="result">
          <h2>You are feeling:</h2>
          <p>{mood}</p>
        </div>
      )}
    </div>
  );
}

export default App;