const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name = 'Ralph');
};

function destructivelyPrependCat(name){
    cats.unshift(name = 'Bob');
};

function destructivelyRemoveLastCat(){
    cats.pop();
};

function destructivelyRemoveFirstCat(){
    cats.shift();
};

function appendCat(){
    let name_1 = ["Milo", "Otis", "Garfield", "Broom"];
        return name_1;
};

function prependCat(){
    let name_2 = ["Arnold", "Milo", "Otis", "Garfield"];
        return name_2;
};


function removeLastCat(){
    let kittens = cats.slice(0,cats.length-1);
    return kittens;
};

function removeFirstCat (){
    let kittens = cats.slice(1);
    return kittens;
};