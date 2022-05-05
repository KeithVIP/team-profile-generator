const Member = require('./Member');

class Engineer extends Member {
    constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
}   

getGit () {
    return this.github;
}

getJob () {
    return "Engineer";
}}

module.exports = Engineer;