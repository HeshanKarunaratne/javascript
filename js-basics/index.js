const circle = {
    radius: 3,
    draw: () => console.log("draw called")
}

const another = { ...circle };
console.log(another);