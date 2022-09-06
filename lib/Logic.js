const inquirer = require('inquirer');

const fs = require('fs');

const generateTemplate = require('../src/page-template');

const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Logic {
    constructor() {
        this.manager;
        this.employeeType;
        this.employee;
        this.currentName;
        this.currentId;
        this.currentEmail;
        this.empList = [];
    }

    writeToFile(fn, data) {
        fs.writeFile(fn, data, err => {
            if (err) throw err;
            console.log('Success! Saved under \'dist/team.html\'');
        });
    }

    initBuild() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the team manager's name?",
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the team manager's ID number?",
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the team manager's email?",
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "What is the team manager's office number?",
                },
            ])
            .then(({ name, id, email, officeNumber }) => {
                this.manager = new Manager(name, id, email, officeNumber);

                // TESTING MANAGER OUTPUT
                // console.log(this.manager);

                this.newEmployeePrompt();
            });
    }

    newEmployeePrompt() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'employeeType',
                    message: 'What type of team member would you like to add?',
                    choices: [
                        'Engineer',
                        'Intern',
                        "I don't want to add any more team members",
                    ],
                },
            ])
            .then(( { employeeType }) => {
                this.employeeType = employeeType;

                if (
                    this.employeeType ===
                    "I don't want to add any more team members"
                ) {
                    console.log('Writing file...');
                    this.writeToFile('./dist/team.html', generateTemplate(this.manager, this.empList));

                } else {
                    this.addNewEmployee();
                }

                // TESTING EMPLOYEE TYPE OUTPUT
                // console.log(employeeType);
            });
    }

    addNewEmployee() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'empName',
                    message: `What is your ${this.employeeType}\'s name?`,
                },
                {
                    type: 'input',
                    name: 'empId',
                    message: `What is your ${this.employeeType}\'s ID number?`,
                },
                {
                    type: 'input',
                    name: 'empEmail',
                    message: `What is your ${this.employeeType}\'s email?`,
                },
            ])
            .then(({ empName, empId, empEmail }) => {
                this.currentName = empName;
                this.currentId = empId;
                this.currentEmail = empEmail;

                if (this.employeeType === 'Engineer') {
                    inquirer
                        .prompt({
                            type: 'input',
                            name: 'empGithub',
                            message: "What is your Engineer's GitHub username?",
                        })
                        .then(({ empGithub }) => {
                            this.employee = new Engineer(
                                this.currentName,
                                this.currentId,
                                this.currentEmail,
                                empGithub
                            );
                        })
                        .then(() => {
                            this.empList.push(this.employee);
                            // console.log(this.empList);
                        })
                        .then(() => {
                            this.newEmployeePrompt();
                        });
                } else if (this.employeeType === 'Intern') {
                    inquirer
                        .prompt({
                            type: 'input',
                            name: 'empSchool',
                            message:
                                "What is the name of your Intern's school?",
                        })
                        .then(({ empSchool }) => {
                            this.employee = new Intern(
                                this.currentName,
                                this.currentId,
                                this.currentEmail,
                                empSchool
                            );
                        })
                        .then(() => {
                            this.empList.push(this.employee);
                            // console.log(this.empList);
                        })
                        .then(() => {
                            this.newEmployeePrompt();
                        });
                } else {
                    return console.log(
                        'Did not make new engineer/intern object...'
                    );
                }
            });
    }
}

module.exports = Logic;
