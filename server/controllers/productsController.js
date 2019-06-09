module.exports = {
  addToCart: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .add_to_cart(req.params.id)
      .then(response => {
        req.session.user.cart.push({
          name: response[0].name,
          price: response[0].price
        });
        req.session.user.total += response[0].price;
        res.status(200).json(req.session.user);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Error5" });
      });
  },
  getCart: (req, res) => {
    res.status(200).json(req.session.user);
  },
  getItems: async (req, res) => {
    const dbInstance = req.app.get("db");

    const menu = await dbInstance.get_items();
    res.status(200).json(menu);
  },
  getChickfila: async (req, res) => {
    const dbInstance = req.app.get("db");

    const menu = await dbInstance.get_chickfila();
    res.status(200).json(menu);
  },
  getBurgerking: async (req, res) => {
    const dbInstance = req.app.get("db");

    const menu = await dbInstance.get_burgerking();

    res.status(200).json(menu);
  },
  getJackinthebox: async (req, res) => {
    const dbInstance = req.app.get("db");

    const menu = await dbInstance.get_jackinthebox();
    res.status(200).json(menu);
  },
  getPapajohns: async (req, res) => {
    const dbInstance = req.app.get("db");

    const menu = await dbInstance.get_papajohns();
    res.status(200).json(menu);
  },
  getWendys: async (req, res) => {
    const dbInstance = req.app.get("db");

    const menu = await dbInstance.get_wendys();
    res.status(200).json(menu);
  }
};
