$(function () {

    // product
    $.get("./data/products.json", function (data) {
        var count = data.length;
        $("#product_dash").append(count);
    });

    // customer
    $.get("./data/customers.json", function (data) {
        var count = data.length;
        $("#customer_dash").append(count);
    });

    // supply
    $.get("./data/suppliers.json", function (data) {
        var count = 0;
        for (var i in data) {
            count += 1;
        }
        $("#supply_dash").append(count);
    });

    // order
    $.get("./data/orders.json", function (data) {
        var count = 0;
        for ($i = 0; $i < data.length; $i++) {
            count += 1;
        }
        $("#order_dash").append(count);
    });
    
});