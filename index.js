// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name = "Ralph");
};

function destructivelyPrependCat(name) {
    cats.unshift(name = "Bob");
};

function destructivelyRemoveLastCat(){
    cats.pop();
};



// cats.shift();


  // console.log(cats);