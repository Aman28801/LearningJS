let hello = document.querySelector('button');
hello.addEventListener('click' , helloMsg);

function helloMsg(){
    alert("Hello World");
}
// loops in arrays
let animals = ["Aman","Amul","Akshat","Kunal"];

for(let name of animals){
    console.log(name)
}