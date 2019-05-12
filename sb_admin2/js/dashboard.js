$(function () {

    // product
    $.getJSON("../../data/products.json", function (data) {
        var count = 0;
        for (var i in data) {
            count +=1;
        }
        $("#product_dash").append(count);
    });

    // customer
    $.get("../../data/customers.json", function (data) {
        var count = 0;
        for (var i = 0; i < data.length; i++) {
            count = count + 1;
        }

        $("#customer_dash").append(count);
    });

    // supply
    $.get("../data/customers.json", function (data) {
        var count = 0;
        for ($i = 0; $i < data.length; $i++) {
            count = count + 1;
        }

        $("#customer_dash").append(count);
    });

    // order
    $.get("../data/customers.json", function (data) {
        var count = 0;
        for ($i = 0; $i < data.length; $i++) {
            count = count + 1;
        }

        $("#customer_dash").append(count);
    });
});