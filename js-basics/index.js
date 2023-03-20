function HTMLElement() {
    this.click = function () {
        console.log("click");
    }
};

HTMLElement.prototype.focus = function () {
    console.log("focus");
};

function HTMLSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push(item);
    }

    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function () {
        console.log(`<select>${this.items.map(item => `<option>${item}</option>`).join('')}</select>`)
    }

};

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

const e = new HTMLElement();
const s = new HTMLSelectElement([1, 2, 3, 4]);

s.render();

function HTMLImageElement(src = "") {
    this.src = src;

    this.render = function () {
        console.log(`<img src="${this.src}"></img>`)
    }
}

HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;

const img = new HTMLImageElement("http://location");

const elements = [
    new HTMLSelectElement([1, 2]),
    new HTMLImageElement()
]

for (let element of elements)
    element.render();