const axios = require("axios");

module.exports = {
  getNear: async (req, res) => {
    const { lati, longi } = req.body;

    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lati},${longi}&radius=1500&type=restaurant&key=AIzaSyCV8IYAG1nDtoLnqYAwFHZsd-zpT9GKQyE`
      )
      .then(async data => {
        console.log(data);
        res.json(data);
      });
  }
};
