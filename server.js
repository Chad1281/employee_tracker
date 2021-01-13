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
  
})

const viewByManPrompt = () =>
const accountNumber = request.query.bankAccountNumber;

const statement = `SELECT * FROM bankaccount WHERE accountNumber = ?`;
console.log(statement);

connection.query(statement, accountNumber, function(error, result) {
  if (error) return response.json(error);

  if(result.length === 0) return response.json({error: "Sorry bank account not found"});

  return response.json({
    id: result[0].id,
    accountNumber: result[0].accountNumber,
    name: result[0].name,
  });
});
  inquirer.prompt([
    {
        type: 'list',
        name: 'manager',
        message: 'Which manager do you want to see employees?',
        // choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
    }
]).then(answers => {
  console.info('answer:', answers.manager);
  
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
  ])

const viewByManPrompt = () =>

  connection.query
  inquirer.prompt([
    {
      type: 'list',
      name: 'remove',
      message: 'Which employee would you like to remove?',
      // choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
    }
]).then(answers => {
  console.info('answer:', answers.remove);
  
})

const updateRolePrompt = () =>
  inquirer.prompt([
    {
      type: 'list',
      name: 'updateRole',
      message: 'Which employee would you like to update their role?',
      // choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
    }
]).then(answers => {
  console.info('answer:', answers.updateRole);
  
})

const updateManPrompt = () =>
  inquirer.prompt([
    {
      type: 'list',
      name: 'updateManager',
      message: 'Which employee would you like to update their manager?',
      // choices: [],
    }
]).then(answers => {
  console.info('answer:', answers.updatManager);
  
})

const promptUser = () =>
  inquirer.prompt([
      {
          type: 'list',
          name: 'tracker',
          message: 'What would you like to do?',
          choices: ['View all Employees', 'View Employees by Department', 'View Employees by Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager'],
      }
  ])
  .then(answers => {
      console.info('answer:', answers.tracker);
      if(answers.tracker === 'View all Employees') {
          viewAll()
        //   .then(answers => {
        //    //   let manager = new Manager (answers)
        //  // employees.push(manager)
        //   })
      } else if (answers.tracker === 'View Employees by Department') {
        viewByDepPrompt();
      } else if (answers.tracker === 'View Employees by Manager') {
        viewByManPrompt();
      } else if (answers.tracker === 'Add Employee') {
        addEmpPrompt();
      } else if (answers.tracker === 'Remove Employee') {
        removeEmpPrompt();
      } else if (answers.tracker === 'Update Employee Role') {
        updateRolePrompt();
      } else if (answers.tracker === 'Update Employee Manager') {
        updateManPrompt();
      }
  })

promptUser();