class Parent {
    constructor() {
        this.father = "Bohlann";
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name+ ' ' + this.father;
    }
}

const baby = new Child('Dieter');
console.log(baby.getFullName());