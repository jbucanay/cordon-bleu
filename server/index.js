require("dotenv").config();
const express = require("express");
const session = require("express-session");
const app = express();
const massive = require("massive");
const axios = require("axios");

// const { getNear } = require("./nearCont");

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

app.use((req, res, next) => {
  next();
});

app.use(express.json());

let timeDist = [];

app.post("/api/test", async (req, res) => {
  const { lat, lng } = req.body.obj;

  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=8000&type=restaurant&key=AIzaSyCV8IYAG1nDtoLnqYAwFHZsd-zpT9GKQyE`
  );

  response.data.results.map(async item => {
    const time = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${lat},${lng}&destinations=place_id:${
        item.place_id
      }&departure_time=now&key=AIzaSyCV8IYAG1nDtoLnqYAwFHZsd-zpT9GKQyE`
    );
    // timeDist = time.data.rows.map(val =>
    //   val.elements.map(dist => dist.duration.text)
    // );

    for (let i = 0; i < time.data.rows.length; i++) {
      for (let j = 0; j < time.data.rows[i].elements.length; j++) {
        timeDist.push(time.data.rows[i].elements[j].duration_in_traffic.text);
      }
    }

    let restaurantAndDistance = {
      driving: timeDist,
      restaurantName: response.data.results.map(item => item.name),
      price: response.data.results.map(item => item.price_level),
      type: response.data.results.map(item => item.types),
      rating: response.data.results.map(item => item.rating),
      totalRatings: response.data.results.map(item => item.user_ratings_total)
    };

    if (timeDist.length === 20) {
      res.json(restaurantAndDistance);
    }
  });
});

app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("db connected");
  })
  .catch(err => console.log(err));

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});
