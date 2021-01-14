const mysql = require("mysql");
const inquirer = require("inquirer");
const console_table = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees_db",
    multipleStatements: true
  });

const viewAll = () => {

  connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err; console.table(res)
  })
  promptUser();
}

const viewByDepPrompt = () =>
  inquirer.prompt([
    {
        type: 'list',
        name: 'department',
        message: 'Which department do you want to see?',
        choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
    }
]).then(answers => {
  console.info('answer:', answers.department);
  promptUser();
})

const addDepPrompt = () => 
  inquirer.prompt([
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the employees first name?'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the employees last name?'
    },        
  ]).then(answers => {
    console.info('answer:', answers.department);
    connection.query("INSERT INTO employee", function(err, res) {
      if (err) throw err; console.table(res)
    })
  addRolePrompt();
})

const addRolePrompt = () => 
  inquirer.prompt([
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the employees first name?'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the employees last name?'
    },        
  ]).then(answers => {
    console.info('answer:', answers.department);
    connection.query("INSERT INTO employee", function(err, res) {
      if (err) throw err; console.table(res)
    })
  addEmpPrompt();
})

const addEmpPrompt = () => 
  inquirer.prompt([
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the employees first name?'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the employees last name?'
    },        
  ]).then(answers => {
    console.info('answer:', answers.department);
    connection.query("INSERT INTO employee", function(err, res) {
      if (err) throw err; console.table(res)
    })
  promptUser();
})

const updateRolePrompt = () => 
  inquirer.prompt([
    {
      type: 'list',
      name: 'updateRole',
      message: 'Which employee would you like to update their role?',
      choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
    }
]).then(answers => {
  console.info('answer:', answers.updateRole);
  promptUser();
})

const promptUser = () =>
  inquirer.prompt([
      {
          type: 'list',
          name: 'tracker',
          message: 'What would you like to do?',
          choices: ['View all Employees', 'View Employees by Department', 'Add Employee', 'Update Employee Role'],
      }
  ])
  .then(answers => {
      console.info('answer:', answers.tracker);
      if(answers.tracker === 'View all Employees') {
          viewAll()
      } else if (answers.tracker === 'View Employees by Department') {
        viewByDepPrompt();
      } else if (answers.tracker === 'Add Employee') {
        addDepPrompt();
      } else if (answers.tracker === 'Update Employee Role') {
        updateRolePrompt();
      } 
  })

promptUser();