import React, { useState } from "react";

function Restuarants() {
  const [type, settype] = useState([
    "American",
    "Mexican",
    "Breakfast",
    "Chinese",
    "Burgers",
    "Italian",
    "Sushi",
    "Asian",
    "Thai",
    "Indian",
    "Barbercue",
    "Sandwiches",
    "Fast Food",
    "Deserts",
    "Vietnamese",
    "Seafood",
    "Japanese"
  ]);

  return (
    <div>
      <h1>Categories</h1>
      <h2>Filtered</h2>
      <h3>Promotional</h3>
      <h4>Featured</h4>
      <h4>firstorder</h4>
      <h4>favorites</h4>
      <h4>new</h4>
      <h5>all</h5>
    </div>
  );
}

export default Restuarants;
