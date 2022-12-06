const {sum,sub,multi,div} = require('./calculate')

test("add 1 + 1 to be equal 2", ()=> {
    expect(sum(1,1)).toEqual(2);

});

test("add 1 - 3 to be equal -2", ()=> {
    expect(sub(1,3)).toEqual(-2);

});

test("add 2 * 3 to be equal 6", ()=> {
    expect(multi(2,3)).toEqual(6);

});

test("add 10/2 to be equal 5", ()=> {
    expect(div(10,2)).toEqual(5);

});