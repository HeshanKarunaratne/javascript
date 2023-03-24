const _items = new WeakMap();
class Stack {

    constructor() {
        _items.set(this, []);
    }

    get count() {
        return _items.get(this).length;
    }

    push(item) {
        _items.get(this).push(item);
    }

    pop() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error("Empty Stack");

        return items.pop();
    }

    peek() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error("Empty Stack");

        return items[items.length - 1];
    }
}

const stack = new Stack();