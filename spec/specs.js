describe('Pizza', function() {
  // tests the object constructor (Pizza)
  it('creates a pizza object with size and topping properties',function() {
    var testPizza = new Pizza("medium","pepperoni");
    expect(testPizza.selectedSize).to.equal("medium");
  });
  // tests cost of chosen size prototype (sizeCost)
  it('creates a sizeCost prototype that calculates the selectedSize cost', function() {
    var testPizza = new Pizza("medium","pepperoni");
    expect(testPizza.sizeCost("medium")).to.equal(6);
  });

  // // test cost of chosen toppings prototype (toppingsCost)
  // it('creates a toppingsCost prototype that calculates the selectedToppings cost', function() {
  //   var testPizza = new Pizza("medium", ["pepperoni","bacon"]);
  //   expect(testPizza.toppingsCost(["pepperoni","bacon"])).to.equal(2.5);
  // });

});
