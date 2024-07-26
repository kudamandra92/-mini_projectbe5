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
  getById: (req, res) => {
    return service
      .fetchUser(req.params.userId)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  getByIdBody: (req, res) => {
    console.log(req);
    if (!req.body) {
      console.log(req);
      res.status(400).send("Bad Request");
    } else {
      return service
        .fetchUserBody(req.body)
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    }
  },
  login: (req, res) => {
    if (!req.body) {
      console.log(req);
      res.status(400).send("Bad Request");
    } else {
      return service
        .checkAuth(req.body)
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    }
  },
};
