import React from "react";
import promo from "../../images/promo.jpg";
import "./Rest.scss";
import { connect } from "react-redux";

/// icon
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
/// icon

function Restuarants(props) {
  Array.prototype.shuffle = function() {
    var i = this.length,
      j,
      temp;
    if (i == 0) return this;
    while (--i) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
    return this;
  };

  let moreFood = [
    "coffee",
    "cookie",
    "corn",
    "cupcake",
    "crab",
    "curry",
    "cereal",
    "dates",
    "dips",
    "duck",
    "dumpling",
    "donuts",
    "eggs",
    "enchilada",
    "eggroll",
    "English",
    "fajita",
    "fish ",
    "franks",
    "French",
    "French",
    "Garlic",
    "ginger",
    "goose",
    "granola",
    "grapes",
    "green",
    "ham",
    "honey",
    "hummus",
    "Italian",
    "jambalaya",
    "jelly",
    "jerky",
    "kale",
    "kabobs",
    "ketchup",
    "lobster",
    "Lamb",
    "Lasagna",
    "Meatball",
    "Moose",
    "Milk",
    "Milkshake",
    "Noodle",
    "Pizza",
    "Pepper",
    "Spaghetti",
    "Toast",
    "Waffle",
    "Wine",
    "Walnut",
    "Yogurt"
  ];

  let foodType = [
    "asparagus",
    "apples",
    "avacado",
    "almond",
    "arugala",
    "artichoke",
    "asian",
    "Apple",
    "Avocado",
    "bacon",
    "bagels",
    "baked",
    "bbq",
    "barley",
    "beer",
    "blueberries",
    "bread",
    "Cabbage",
    "cake",
    "carrot",
    "carne",
    "celery",
    "cheese",
    "chicken",
    "catfish",
    "chips",
    "chocolate",
    "chowder",
    "clams"
  ];

  let day = ["featured", "daily", "weekly"];
  let randoDay = day.shuffle();
  let rando = foodType.shuffle();
  let other = moreFood.shuffle();

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
      <div className="filter-section">
        <ul className="filter">
          <li>
            Over 4.5 <i className="fas fa-star" /> &#65372; &gt;
          </li>
          <li>Pickup</li>
          <li>Vegetarian</li>
          <li>Dashpass</li>
          <li>&#36;,&#36;&#36; &#65372; &gt;</li>
        </ul>
      </div>
      <section className="promo">
        <div>
          <h2>&#36;0 delivery for 30 days!</h2>
          <p className="ten">
            &#36;0 delivery for orders over &#36;10 for 30days
          </p>
          <p className="learn">Learn More &#10230;</p>
        </div>
        <img
          src={`https://source.unsplash.com/featured/?food,salad`}
          alt=""
          width="200"
        />
      </section>
      <section className="featured">
        <div>
          <h1>Featured National Partners</h1>
          <button className="see-all-button">See All &#10230;</button>
        </div>
        <div className="promoted">
          <div className="top">
            <figure>
              <img
                src={`https://source.unsplash.com/${
                  randoDay[1]
                }/?food,tortilla`}
                width="200"
                alt="chipotle"
              />
              <figcaption>Chipotle</figcaption>
              <figcaption>Free delivery </figcaption>
            </figure>
            <figure>
              <img
                src={`https://source.unsplash.com/featured/?food,cheese`}
                width="250"
                alt="wendy"
              />
              <figcaption>Wendy's</figcaption>
              <figcaption>Free delivery </figcaption>
            </figure>
          </div>
          <div className="bottom">
            <figure>
              <img
                src={`https://source.unsplash.com/featured/?food,hamburger`}
                width="200"
                alt="chicfila"
              />
              <figcaption>Chick-fil-A&#174;</figcaption>
              <figcaption>Free delivery </figcaption>
            </figure>
            <figure>
              <img
                src={`https://source.unsplash.com/${
                  randoDay[0]
                }/?food,sandwich`}
                alt="cornerbakery"
                width="200"
              />
              <figcaption>Corner Bakey</figcaption>
              <figcaption>Free delivery </figcaption>
            </figure>
            <figure>
              <img
                src={`https://source.unsplash.com/${randoDay[0]}/?food,pizza`}
                alt="papajohn"
                width="200"
              />
              <figcaption>Papa John's Pizza</figcaption>
              <figcaption>Free delivery </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="pickup">
        <header>
          <h1>New! Try Pickup</h1>
          <p>No lines, no fees</p>
          <button className="see-all-button">See All &#10230;</button>
        </header>
        {props.eatery &&
          props.eatery.map((item, index) => {
            return (
              <figure key={index}>
                <img
                  src={`https://source.unsplash.com/${
                    randoDay[0]
                  }/?food,${rando[30] || other[20]}`}
                  alt=""
                  width="200"
                />
                <figcaption>{item.restaurantName[0]}</figcaption>
                <figcaption>
                  Pickup in {item.driving[0]}
                  <figcaption>{item.gpsTime[0]}</figcaption>
                </figcaption>
              </figure>
            );
          })}
        {props.eatery &&
          props.eatery.map((item, index) => {
            return (
              <figure key={index}>
                <img
                  src={`https://source.unsplash.com/${randoDay[0]}/?food,${
                    rando[1]
                  }`}
                  alt=""
                  width="200"
                />
                <figcaption>{item.restaurantName[2]}</figcaption>
                <figcaption>
                  Pickup in {item.driving[2]}
                  <figcaption>{item.gpsTime[2]}</figcaption>
                </figcaption>
              </figure>
            );
          })}

        {props.eatery &&
          props.eatery.map((item, index) => {
            return (
              <figure key={index}>
                <img
                  src={`https://source.unsplash.com/${randoDay[0]}/?food,${
                    other[10]
                  }`}
                  alt=""
                  width="200"
                />
                <figcaption>{item.restaurantName[3]}</figcaption>
                <figcaption>
                  Pickup in {item.driving[3]}
                  <figcaption>{item.gpsTime[3]}</figcaption>
                </figcaption>
              </figure>
            );
          })}
        {props.eatery &&
          props.eatery.map((item, index) => {
            return (
              <figure key={index}>
                <img
                  src={`https://source.unsplash.com/${randoDay[0]}/?food,${
                    other[2]
                  }`}
                  alt=""
                  width="200"
                />
                <figcaption>{item.restaurantName[4]}</figcaption>
                <figcaption>
                  Pickup in {item.driving[4]}
                  <figcaption>{item.gpsTime[4]}</figcaption>
                </figcaption>
              </figure>
            );
          })}
        {props.eatery &&
          props.eatery.map((item, index) => {
            return (
              <figure key={index}>
                <img
                  src={`https://source.unsplash.com/${randoDay[2]}/?food,${
                    rando[2]
                  }`}
                  alt=""
                  width="200"
                />
                <figcaption>{item.restaurantName[5]}</figcaption>
                <figcaption>
                  Pickup in {item.driving[5]}
                  <figcaption>{item.gpsTime[5]}</figcaption>
                </figcaption>
              </figure>
            );
          })}
      </section>

      <section className="alleatery">
        <h3>All Restuarants</h3>
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
        <div className="filter-section">
          <ul className="filter">
            <li>
              Over 4.5 <i className="fas fa-star" /> &#65372; &gt;
            </li>
            <li>Pickup</li>
            <li>Vegetarian</li>
            <li>Dashpass</li>
            <li>&#36;,&#36;&#36; &#65372; &gt;</li>
          </ul>
        </div>
        <div className="alleatery">
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/${
                      randoDay[0]
                    }/?food,${other[12] || rando[2]}`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[1]}</figcaption>
                  <figcaption>
                    {item.price[1] && item.price[1] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[1].slice(0, 2).map(val => {
                        return <li> {val} </li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[1]}</figcaption>
                  <figcaption>
                    {item.rating[1]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[1] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[1]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/featured/?food,${
                      rando[10]
                    }`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[6]}</figcaption>
                  <figcaption>
                    {item.price[6] && item.price[6] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[6].slice(0, 3).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[6]}</figcaption>
                  <figcaption>
                    {item.rating[6]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[6] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[6]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/${randoDay[2]}/?food,${
                      rando[11]
                    }`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[7]}</figcaption>
                  <figcaption>
                    {item.price[7] && item.price[7] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[7].slice(0, 2).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[7]}</figcaption>
                  <figcaption>
                    {item.rating[7]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[7] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[7]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/${randoDay[2]}/?food,${
                      other[12]
                    }`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[8]}</figcaption>
                  <figcaption>
                    {item.price[8] && item.price[8] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[8].slice(0, 2).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[8]}</figcaption>
                  <figcaption>
                    {item.rating[8]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[8] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[8]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/featured/?food,${
                      rando[13]
                    }`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[9]}</figcaption>
                  <figcaption>
                    {item.price[9] && item.price[9] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[9].slice(0, 2).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[9]}</figcaption>
                  <figcaption>
                    {item.rating[9]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[9] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[9]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/${randoDay[0]}/?food,${
                      rando[13]
                    }`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[10]}</figcaption>
                  <figcaption>
                    {item.price[10] && item.price[10] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[10].slice(0, 2).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[10]}</figcaption>
                  <figcaption>
                    {item.rating[10]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[10] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[10]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/featured/?food,${
                      rando[14]
                    }`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[11]}</figcaption>
                  <figcaption>
                    {item.price[11] && item.price[11] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[11].slice(0, 2).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[11]}</figcaption>
                  <figcaption>
                    {item.rating[11]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[11] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[11]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/featured/?food,${
                      other[15]
                    }`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[12]}</figcaption>
                  <figcaption>
                    {item.price[12] && item.price[12] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[12].slice(0, 2).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[12]}</figcaption>
                  <figcaption>
                    {item.rating[12]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[12] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[12]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/featured/?food,${
                      rando[16]
                    }`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[13]}</figcaption>
                  <figcaption>
                    {item.price[13] && item.price[13] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[13].slice(0, 2).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[13]}</figcaption>
                  <figcaption>
                    {item.rating[13]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[13] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[13]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/${randoDay[2]}/?food,${
                      other[17]
                    }`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[14]}</figcaption>
                  <figcaption>
                    {item.price[14] && item.price[14] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[14].slice(0, 2).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[14]}</figcaption>
                  <figcaption>
                    {item.rating[14]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[14] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[14]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}

          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/featured/?food,${
                      other[20]
                    }`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[15]}</figcaption>
                  <figcaption>
                    {item.price[15] && item.price[15] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[15].slice(0, 2).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[15]}</figcaption>
                  <figcaption>
                    {item.rating[15]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[15] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[15]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/${randoDay[0]}/?food,${
                      rando[21]
                    }`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[16]}</figcaption>
                  <figcaption>
                    {item.price[16] && item.price[16] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[16].slice(0, 2).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[16]}</figcaption>
                  <figcaption>
                    {item.rating[16]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[16] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[16]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/${randoDay[0]}/?food,${
                      rando[22]
                    }`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[17]}</figcaption>
                  <figcaption>
                    {item.price[17] && item.price[17] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[17].slice(0, 2).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[17]}</figcaption>
                  <figcaption>
                    {item.rating[17]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[17] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[17]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/featured/?food,${
                      other[25]
                    }`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[18]}</figcaption>
                  <figcaption>
                    {item.price[18] && item.price[18] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[18].slice(0, 2).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[18]}</figcaption>
                  <figcaption>
                    {item.rating[18]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[18] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[18]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
          {props.eatery &&
            props.eatery.map((item, index) => {
              return (
                <figure key={index}>
                  <img
                    src={`https://source.unsplash.com/featured/?food,${rando[26] ||
                      other[26]}`}
                    alt=""
                    width="200"
                  />
                  <figcaption>{item.restaurantName[19]}</figcaption>
                  <figcaption>
                    {item.price[19] && item.price[19] >= 2 ? (
                      <p>&#36;&#36;</p>
                    ) : (
                      <p>&#36;</p>
                    )}
                    <ul>
                      {item.type[19].slice(0, 2).map(val => {
                        return <li>{val}</li>;
                      })}
                    </ul>
                  </figcaption>
                  <figcaption>{item.driving[19]}</figcaption>
                  <figcaption>
                    {item.rating[19]} <i className="fas fa-star" />
                    <figcaption>
                      {item.totalRatings[19] >= 1500 ? (
                        <p>1500+ ratings</p>
                      ) : (
                        <p>{item.totalRatings[19]} ratings</p>
                      )}
                    </figcaption>
                  </figcaption>
                </figure>
              );
            })}
        </div>
      </section>
    </article>
  );
}

const mapStateToProps = reduxState => {
  return {
    eatery: reduxState.search.eatery
  };
};

export default connect(mapStateToProps)(Restuarants);
