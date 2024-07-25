const service = require("../services/game-service");

module.exports = {
  getAll: (req, res) => {
    return service
      .fetchGameAll()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  getById: (req, res) => {
    console.log(req.params.userId);
    return service
      .fetchGame(req.params.userId)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
};
