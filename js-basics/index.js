let address1 = new Address("Street", "Colombo", 123);
let address2 = new Address("Street", "Colombo", 123);

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    let isEqual = true;
    for (let key in address1) {
        if (address1[key] !== address2[key]) {
            isEqual = false;
            break;
        }
    }
    return isEqual;
}

function areSame(address1, address2) {
    return address1 === address2;
}