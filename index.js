const generateHTML = require('./src/generateHTML');

const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Member = require('./lib/Member');

const teamArray = [];

const addMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'job',
            message: "Please select the team member's job",
            choices: ['Engineer', 'Intern', 'Manager']

        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team member's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team member's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team member's ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the team member's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team member's email",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the team member's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the team member's Github username",
            when: (input) => input.job === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the team member's Github name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.job === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the team member's office number",
            when: (input) => input.job === "Manager",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter the team member's office number!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
//     .then(internInput => {
//         const  { name, id, email, officeNumber } = managerInput; 
//         const intern = new Intern (name, id, email, school);

//         teamArray.push(intern); 
//         console.log(intern); 
//     })
// };
        .then(memberData => {
            let { name, id, email, job, github, school, officeNumber, confirmAddMember } = memberData;
            let member;

            if (job === "Engineer") {
                member = new Engineer(name, id, email, github);

                console.log(member);

            } else if (job === "Intern") {
                job = new Intern(name, id, email, school);

                console.log(member);
                teamArray.push(member);

            } else (job === "Manager") 
                job = new Manager(name, id, email, officeNumber);

                console.log(member);
                teamArray.push(member);

            teamArray.push(member);

            if (confirmAddMember) {
                return addMember(teamArray);
            } else {
                return teamArray;
            }

    })
};

const writeFile = data => {
    fs.writeFile('./index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team Profile has been created!")
        }
    })
};

   addMember()
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });

