class Member {
    constructor(name, id, email) {
        this.name= name;
        this.id = id;
        this.email= email;
    }

    getName () {
        return this.name;
    }

    getID () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getJob () {
        return 'Member';
    }
};

module.exports = Member;