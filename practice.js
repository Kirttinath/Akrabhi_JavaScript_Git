const list = [];
const car = {};
console.log(car._proto_ === new Object()._proto_);
console.log(list._proto_ === new Array()._proto_);
console.log(car._proto_ === Object.Prototype);
console.log(list._proto_ === Array.Prototype);
