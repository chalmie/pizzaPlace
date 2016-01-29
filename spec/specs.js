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

  // test cost of chosen toppings prototype (toppingsCost)
  it('creates a toppingsCost prototype that calculates the selectedToppings cost', function() {
    var testPizza = new Pizza("medium", ["pepperoni","bacon"]);
    expect(testPizza.toppingsCost(["pepperoni","bacon"])).to.equal(2.5);
  });

  // get total cost of pizza
  it('combines size and topping cost to get total pizza cost', function() {
    var testPizza = new Pizza("medium", ["pepperoni","bacon"]);
    expect(testPizza.pizzaCost(6,2.5)).to.equal(8.5);
  });

});

// describe('PizzaOrder', function() {
//   it('creates an object to hold purchased pizzas in an empty array',function() {
//     var testPizzaOrder = new PizzaOrder();
//     expect(testPizzaOrder.pizzas).to.eql([]);
//   });
//   it('adds a pizza to the pizzas array',function() {
//     var testPizzaOrder = new PizzaOrder();
//     var testPizza = new Pizza("medium",["pepperoni","bacon"]);
//     testPizzaOrder.addPizza(testPizza);
//     expect(testPizzaOrder.pizzas).to.eql([testPizza]);
//   });
//   it('returns the price of all pizzas in the pizzas array', function() {
//     var testPizzaOrder = new PizzaOrder();
//     var testPizza1 = new Pizza("medium",["pepperoni","bacon"]);
//     var testPizza2 = new Pizza("medium",["pepperoni","squid"]);
//     testPizzaOrder.addPizza(testPizza1);
//     testPizzaOrder.addPizza(testPizza2);
//     expect(testPizzaOrder.grandTotal()).to.equal(17.5)
//   });
//
// });
