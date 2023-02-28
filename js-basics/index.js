function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw called");
    }
}

Circle.call({}, 1);
const circle = new Circle(1);