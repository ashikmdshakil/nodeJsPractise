var mysql = require('mysql');

var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "4243"
});
var sql = "create database node";
connection.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Application is connected to ther database server");
    }
    connection.query(sql, function(err, result){
        if(err){
            console.log("erroe occured in sql query");
        }
        else{
            console.log("Database is created");
            console.log(result);
        }
    });
});