// primitive datatype 


const id = Symbol('123')
const emplyId = Symbol('123')

console.log(id==emplyId);

const bidNumber = 123456789098765n

// Reference type (non-primitive datatype.)

//Array, Objects, Fuctions

const Array = ["hello","what's up","how are you"]

let myObj = {
    name: "hello",
    age: 23,
    class: 12
}

const myFunction = function(){
    console.log("hello ndcinei");
}

//const bidNumber = 123456789098765
console.log(typeof bidNumber)