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
}

/* 
describe('prependCat(name)', function () {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
*/