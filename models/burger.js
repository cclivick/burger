var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    insertOne: function(newBurger, cb) {
      orm.insertOne(newBurger, function(res) {
        cb(res);
      });
    },
    updateOne: function(burgerName, cb) {
      orm.update(burgerName, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;
  