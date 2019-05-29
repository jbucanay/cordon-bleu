import React, { useState } from "react";
import promo from "../../images/promo.png";
import "./Rest.scss";

import American from "./food_icons/American.jpg";
import Mexican from "./food_icons/Mexican.png";
import Breakfast from "./food_icons/Breakfast.png";
import Chinese from "./food_icons/Chinese.png";
import Burgers from "./food_icons/Burgers.png";
import Italian from "./food_icons/Italian.png";
import Sushi from "./food_icons/Sushi.png";
import Asian from "./food_icons/Asian.png";
import Thai from "./food_icons/Thai.png";
import Indian from "./food_icons/Indian.png";
import Barbecue from "./food_icons/Barbecue.jpg";
import Sandwiches from "./food_icons/Sandwiches.png";
import Fast_Food from "./food_icons/Fast_Food.png";
import Dessert from "./food_icons/Dessert.png";
import Vietnamese from "./food_icons/Vietnamese.png";
import Seafood from "./food_icons/Seafood.jpg";
import Japanese from "./food_icons/Japanese.png";

function Restuarants() {
  const [type] = useState([
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

  console.log(American);

  return (
    <article>
      <section className="restcont">
        <ul>
          <li>
            <img src={American} alt="" width="47" />
            <p>American</p>
          </li>
          <li>
            <img src={Mexican} alt="" width="47" />
            <p>Mexican</p>
          </li>
          <li>
            <img src={Breakfast} alt="" width="47" />
            <p>Breakfast</p>
          </li>
          <li>
            <img src={Chinese} alt="" width="47" />
            <p>Chinese</p>
          </li>
          <li>
            <img src={Burgers} alt="" width="47" />
            <p>Burgers</p>
          </li>
          <li>
            <img src={Italian} alt="" width="47" />
            <p>Italian</p>
          </li>
          <li>
            <img src={Sushi} alt="" width="47" />
            <p>Sushi</p>
          </li>
          <li>
            <img src={Asian} alt="" width="47" />
            <p>Asian</p>
          </li>
          <li>
            <img src={Thai} alt="" width="47" />
            <p>Thai</p>
          </li>
          <li>
            <img src={Indian} alt="" width="47" />
            <p>Indian</p>
          </li>
          <li>
            <img src={Barbecue} alt="" width="47" />
            <p>Barbecue</p>
          </li>
          <li>
            <img src={Sandwiches} alt="" width="47" />
            <p>Sandwiches</p>
          </li>
          <li>
            <img src={Fast_Food} alt="" width="47" />
            <p>Fastfood</p>
          </li>
          <li>
            <img src={Dessert} alt="" width="47" />
            <p>Desserts</p>
          </li>
          <li>
            <img src={Vietnamese} alt="" width="47" />
            <p>Vietnamese</p>
          </li>
          <li>
            <img src={Seafood} alt="" width="47" />
            <p>Seafood</p>
          </li>
          <li>
            <img src={Japanese} alt="" width="47" />
            <p>Japanese</p>
          </li>
        </ul>
      </section>
      <section>
        <ul className="filter">
          <li>
            Over 4.5 <i className="fas fa-star" /> &#65372; &gt;
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
