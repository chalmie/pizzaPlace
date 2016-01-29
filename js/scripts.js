// =============================
// Business Logic
// =============================

function Pizza(selectedSize,selectedToppings) {
  this.selectedSize = selectedSize;
  this.selectedToppings = selectedToppings;
}

Pizza.prototype.sizeCost = function() {
  var sizes = {
    personal: 4,
    small: 5,
    medium: 6,
    large: 7
  };

  return sizes[this.selectedSize];
}

Pizza.prototype.toppingsCost = function() {
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

  this.selectedToppings.forEach(function(topping) {
    totalToppingsCost += toppings[topping];
  });

  return totalToppingsCost;
}

Pizza.prototype.pizzaCost = function() {
  return this.sizeCost() + this.toppingsCost();
}


// function PizzaOrder() {
//   this.pizzas = [];
// }
//
// PizzaOrder.prototype.addPizza = function(pizza) {
//   this.pizzas.push(pizza);
// }
// =============================
// User Interface Logic
// =============================


$(document).ready(function() {
  $('#pizza-order').submit(function(event) {
    event.preventDefault();
    // create variables for size and toppings
    var size = $("input[name=optradio1]:checked").val();
    var toppings = [];

    // push checked toppings into toppings array
    $("input:checkbox:checked").map(function(){
      toppings.push($(this).val());
    });
    // create pizza object with user selected size and toppings
    var userPizza = new Pizza(size,toppings);
    var grandTotal = userPizza.pizzaCost().toFixed(2);

    $('#totalCostSpan').text(grandTotal);


  });
});



// var checkedValues = $('input:checkbox:checked').map(function() {
//     return this.value;
// }).get();
