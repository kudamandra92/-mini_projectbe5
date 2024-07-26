const db = require("../models");
const jwt = require("jsonwebtoken");
const key = "secretkey";

module.exports = {
  fetchUserAll: async function () {
    try {
      const data = await db.User.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  },
  fetchUser: async function (payload) {
    try {
      const data = await db.User.findOne({ where: { id: payload } });
      return data;
    } catch (error) {
      throw error;
    }
  },
  fetchUserBody: async function (payload) {
    try {
      const data = await db.User.findOne({ where: { id: payload.id } });
      return data;
    } catch (error) {
      throw error;
    }
  },
  checkAuth: async function (payload) {
    try {
      const data = await db.User.findOne({
        where: { username: payload.username },
      });

      if (!data) {
        throw new Error("User Not Found");
      }

      if (payload.password != data.password) {
        throw new Error("Wrong Password");
      }
      const token = jwt.sign(
        {
          id: data.id,
          username: data.username,
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        key
      );
      return token;
    } catch (error) {
      throw error;
    }
  },
};
