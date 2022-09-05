const inquirer = require('inquirer');

const fs = require('fs');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Logic {
    constructor() {
        this.numEmployees = 0;
        this.manager;
    }

    initBuild() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the manager's name?",
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the manager's ID number?",
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the manager's email?",
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "What is the manager's office number?",
                },
            ])
            .then(({ name, id, email, officeNumber }) => {
                this.manager = new Manager(name, id, email, officeNumber);

                // TESTING MANAGER OUTPUT
                console.log(this.manager);
            });
    }
}

module.exports = Logic;
