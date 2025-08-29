import React, { useEffect, useState } from "react";

function TrafficLights() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const cycle = { red: "green", green: "yellow", yellow: "red" };
    const interval = setInterval(() => {
      setLight((prev) => cycle[prev]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Traffic Lights</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {["red", "yellow", "green"].map((c) => (
          <div
            key={c}
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              background: light === c ? c : "gray",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default TrafficLights;
