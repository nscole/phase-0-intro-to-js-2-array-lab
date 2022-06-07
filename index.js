const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name = 'Ralph');
};

function destructivelyPrependCat(name){
    cats.unshift(name = 'Bob');
};



/* 
describe('destructivelyPrependCat(name)', function () {
    it('prepends a cat to the beginning of the cats array', function () {
        destructivelyPrependCat("Bob");

        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });
*/