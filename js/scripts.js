function Pizza(selectedSize,selectedToppings) {
  this.selectedSize = selectedSize;
  this.selectedToppings = selectedToppings;
}

Pizza.prototype.sizeCost = function(selectedSize) {
  var sizes = {
    personal: 4,
    small: 5,
    medium: 6,
    large: 7
  };

  return sizes[selectedSize];
}

Pizza.prototype.toppingsCost = function(selectedToppings) {
  var totalToppingsCost = 0;
  var toppings = {
    pepperoni: 1,
    sausage: 1,
    bacon: 1.5,
    mushrooms: 0.5,
    cheese: 1,
    squid: 2,
    shrimp: 2,
    onion: 0.5,
  };

  selectedToppings.forEach(function(topping) {
    totalToppingsCost += toppings[topping];
  });

  return totalToppingsCost;
}
