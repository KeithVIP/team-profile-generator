const Member = require('./Member');

class Manager extends Member {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getJob() {
        return 'Manager';
    }
}

module.exports = Manager;