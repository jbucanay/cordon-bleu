import React, { useState } from "react";
import "./Rest.scss";

function Restuarants() {
  const [icon, setIcon] = useState([<i class="fas fa-hamburger" />]);
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

  console.log(icon);
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
        <ul className="filter">
          <li>
            Over 4.5 <i class="fas fa-star" /> &#65372; &gt;
          </li>
          <li>Pickup</li>
          <li>Vegetarian</li>
          <li>Dashpass</li>
          <li>&#36;,&#36;&#36; &#65372; &gt;</li>
        </ul>
      </section>
      <section>
        <h1>Featured</h1>
      </section>
    </article>
  );
}

export default Restuarants;
