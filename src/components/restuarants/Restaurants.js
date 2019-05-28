import React, { useState } from "react";
import "./Rest.scss";

function Restuarants() {
  const [type, setType] = useState([
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
  console.log(type.map(item => item));
  return (
    <article>
      <section className="restcont">
        {type.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item}</li>
            </ul>
          );
        })}
      </section>
      <section>
        <h1>filter</h1>
      </section>
      <section>
        <h1>Featured</h1>
      </section>
    </article>
  );
}

export default Restuarants;
