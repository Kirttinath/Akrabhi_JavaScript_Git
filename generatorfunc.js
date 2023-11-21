//Generator function '*';
//The generator function specifies what value is yielded next time next() is called. Can either have a finite number of yields, after which next() returns an undefined value, or an infinite number of values using a loop.

function* greeter() {
    yield "Kirtti";
    yield "How are you";
    yield "fine?";
}
const greet = greeter();
console.log(greet.next().value);// 'Kirtti'
console.log(greet.next().value);// 'How are you?'
console.log(greet.next().value);// 'fine'
console.log(greet.next().value);// undefined

function* idCreator() {let i = 0;while (true)yield i++;}
const ids = idCreator();
console.log(ids.next().value);// 0
console.log(ids.next().value);// 1
console.log(ids.next().value);// 2