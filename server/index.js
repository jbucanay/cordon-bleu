require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const app = express();
const massive = require("massive");
const { searchRestaurants } = require("./controllers/searchController");
const productsController = require("./controllers/productsController");
const authController = require("./controllers/authController");
const checkForSession = require("./middlewares/checkForSession");


const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = 9090,;

app.use((req, res, next) => {
  next();
});

app.use(express.json());

app.post("/api/restaurant", searchRestaurants);

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

app.use(checkForSession);
app.use(express.static(`${__dirname}/../build`));

app.get("/api/menu", productsController.getItems);

// app.get('/api/menu', productsController.getItems);
app.get("/api/menu/chickfila", productsController.getChickfila);
app.get("/api/menu/burgerking", productsController.getBurgerking);
app.get("/api/menu/jackinthebox", productsController.getJackinthebox);
app.get("/api/menu/papajohns", productsController.getPapajohns);
app.get("/api/menu/wendys", productsController.getWendys);

app.get("/api/cart", productsController.getCart);
app.post("/api/cart/:id", productsController.addToCart);
app.delete("/api/cart/:id", productsController.deleteFromCart);

app.get("/api/getSession", authController.getSession);

app.delete("/api/signout", authController.signout);

app.post("/api/session", authController.addToSession);

app.post("/api/session", authController.addToSession);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
