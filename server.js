const mysql = require("mysql");
const inquirer = require("inquirer");
const console_table = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employees_db",
    multipleStatements: true
  });