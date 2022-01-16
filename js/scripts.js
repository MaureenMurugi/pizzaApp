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

    var pizzaTotal = priceSize + priceCrust + priceTopping;
    return pizzaTotal;

}


//user-interface
$(document).ready(function () {
    $("#order-online").click(function() {
        $(".view-two").show();
        $(".view-one").hide();
    });

    $("#continue").click(function(event) {
        event.preventDefault();
        $(".view-three").show();
        $(".view-two").hide();

        //get values
        let pizzaName = $("#pizza option:selected").val();
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option:selected").val();
        var pizzaTopping = [];
        $("input:checkbox[name=toppings]:checked").each(function() {
            pizzaTopping.push($(this).val());
        });

        var total = price(pizzaSize, pizzaCrust, pizzaTopping);
        var grandTotal = total + 200;
        var order = new Pizza(pizzaName,pizzaSize,pizzaCrust,pizzaTopping)
        $(".current-order").append('<tr><td id="name">' + order.pizza + '</td><td id="size">' +order.size + '</td><td id="crust">' +order.crust + '</td><td id="toppings">' +order.toppings + '</td><td id="total">' +order.total)

        //pickup
        $("#pick-up").click(function() {
            alert("Hello customer, your order will be ready for pickup in 1 hour. Your order total is " + total);
        })
    });
});

