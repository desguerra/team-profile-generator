const inquirer = require('inquirer');

const fs = require('fs');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Logic {
    constructor() {
        this.manager;
        this.employeeType;
        this.employee;
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
                console.log(this.manager);

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
                    choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
                },
            ])
            .then(({ employeeType }) => {
                this.employeeType = employeeType;

                if (this.employeeType === 'I don\'t want to add any more team members') {
                    // TODO: make this write the output file
                    console.log('Thank you!');
                    
                }
                else {
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
                {
                    type: 'input',
                    name: 'empGithub',
                    message: `What is your ${this.employeeType}\'s GitHub username?`,
                    when: ( { employeeType } ) => {
                        if (employeeType === 'Engineer') {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'empSchool',
                    message: `What is your ${this.employeeType}\'s school?`,
                    when: ( { employeeType } ) => {
                        if (employeeType === 'Intern') {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
            ])
            .then((  ) => {
                
                if (this.employeeType === 'Engineer') {
                    console.log('engineer object...');
                    //this.employee = new Engineer(name, id, email, empGithub);
                }
                else if (this.employeeType === 'Intern') {
                    console.log('intern object...');
                    //this.employee = new Engineer(name, id, email, empSchool);
                }
                else {
                    return console.log('Did not make new engineer/intern object...');
                }

                // TESTING EMPLOYEE TYPE
                // console.log(this.employeeType);

                // console.log(this.employeeType);

                // go back to add new emp prompt
                // this.newEmployeePrompt(employeeType);
            });
    }
}

module.exports = Logic;
