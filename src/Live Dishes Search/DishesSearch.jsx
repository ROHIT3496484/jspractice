import React, { useState, useEffect } from "react";

const dishes = ["Idli", "Dosa", "Vada", "Upma", "Pongal", "Tea"];

const DebouncedSearch = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(input);
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  const results = dishes.filter((d) =>
    d.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h3>Search Menu</h3>
      <input
        placeholder="Type a dish..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul>
        {results.map((dish, i) => (
          <li key={i}>{dish}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncedSearch;
