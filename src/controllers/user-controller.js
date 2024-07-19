const service = require("../services/user-service");

module.exports = {
  getAll: (req, res) => {
    return service
      .fetchUserAll()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
};
