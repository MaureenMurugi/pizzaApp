function Pizza(pizza, size, crust, toppings) {
    this.pizza = pizza;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}

var priceSize, priceCrust, priceTopping;

var price = function (pizzaSize, pizzaCrust, pizzaTopping) {
    switch (pizzaSize) {
        case "":
            priceSize = 0;
            break;
        case "large":
            priceSize = 1000;
            break;
        case "medium":
            priceSize = 800;
            break;
        case "small":
             priceSize = 550;
            break;
        default:
            location.reload();
            alert("Please select a pizza size");

    };

    switch (pizzaCrust) {
        case "":
            priceCrust = 0;
            break;
        case "crispy":
            priceSize = 100;
            break;
        case "stuffed":
            priceSize = 200;
            break;
        case "gluten":
             priceSize = 150;
            break;
        default:
            location.reload();
            alert("Please select a pizza crust");

    };

    if (priceSize == 'large') {
        priceTopping = pizzaTopping.length * 150;
    }else if (pizzaSize == 'medium') {
        priceTopping = pizzaTopping.length * 100;
    } else if (pizzaSize == 'small') {
        priceTopping = pizzaTopping.length * 50;
    }
}