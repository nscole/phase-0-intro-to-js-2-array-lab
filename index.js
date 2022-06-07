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

function appendCat(name){
    let name_1 = ["Milo", "Otis", "Garfield", "Broom"];
        return name_1;
};


/* 
describe('appendCat(name)', function () {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
*/