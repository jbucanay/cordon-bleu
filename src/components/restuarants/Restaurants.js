import React, { useState } from "react";
import "./Rest.scss";
import promo from "../../images/promo.png";

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
      <section className="promo">
        <h2>&#36;0 delivery for 30 days!</h2>
        <p>&#36;0 delivery for orders over &#36;10 for 30days</p>
        <p>Learn More &#10230;</p>
        <img src={promo} alt="" />
      </section>
    </article>
  );
}

export default Restuarants;
