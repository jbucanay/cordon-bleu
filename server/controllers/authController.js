module.exports = {
  getSession: (req, res) => {
    res.status(200).json(req.session);
  },
  addToSession: (req, res) => {
    req.session.user.address = req.body.address;
    req.session.user.email = req.body.firebaseEmail;
    res.sendStatus(200);
  },
  signout: (req, res) => {
    req.session.destroy();
    res.status(200).send(req.session);
  }
};
