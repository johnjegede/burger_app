var connection = require("./connection.js");


var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers ";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(whatToSelect, value) {
    var queryString = "INSERT INTO burgers (??) VALUES (??) ";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, value], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(value) {
    var queryString = "UPDATE burgers SET devoured =  ?? WHERE devoured = false";
    console.log(queryString);
    connection.query(queryString, [value], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
