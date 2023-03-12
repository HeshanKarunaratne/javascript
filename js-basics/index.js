function Circle(radius) {
    this.radius = radius;
    this.move = function () {
        console.log("move");
    }
}

Circle.prototype.draw = function () {
    console.log("draw");
}

const c1 = new Circle(1);

// Returns instance members
console.log(Object.keys(c1));

// Returns all members(Instance + Prototype)
for (let key in c1) console.log(key);