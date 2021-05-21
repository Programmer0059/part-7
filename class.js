class Actor {
    constructor(name,movie) {
        this.name = name;
        this.movie = movie;
        this.gender = 'male';
    }
}

const actor1 = new Actor('Keanu Reeves', 'John Wick');
const actor2 = new Actor('Tom Cruise', 'Top Gun');
console.log(actor1,actor2.gender);