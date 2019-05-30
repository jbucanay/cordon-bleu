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

app.post("/api/test", async (req, res) => {
  const { lat, lng } = req.body.obj;

  let response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&key=AIzaSyCV8IYAG1nDtoLnqYAwFHZsd-zpT9GKQyE`
  );

  res.json(response.data.results);
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
