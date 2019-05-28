import React, { useState } from "react";
import "./Rest.scss";
import American from "./food_icons/American";
import Mexican from "./food_icons/Mexican";
import Breakfast from "./food_icons/Breakfast";
import Chinese from "./food_icons/Chinese";
import Burgers from "./food_icons/Burgers";
import Italian from "./food_icons/Italian";
import Sushi from "./food_icons/Sushi";
import Asian from "./food_icons/Asian";
import Thai from "./food_icons/Thai";
import Indian from "./food_icons/Indian";
import Barbecue from "./food_icons/Barbecue";
import Sandwiches from "./food_icons/Sandwiches";
import Fast_Food from "./food_icons/Fast_Food";
import Dessert from "./food_icons/Dessert";
import Vietnamese from "./food_icons/Vietnamese";
import Seafood from "./food_icons/Seafood";
import Japanese from "./food_icons/Japanese";

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
    "Barbecue",
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
