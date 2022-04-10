class Singleton {
    constructor(name) {
        if (Singleton.instance) {
            return Singleton.instance
        }
        Singleton.instance = this;
        this.name = name;
    }


    getName() {
        return this.name;
    }
}

module.exports = Singleton;