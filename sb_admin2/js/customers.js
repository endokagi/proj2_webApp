$(function () {
    $.get("data/customers.json", function (data, status) {
        if (status == 'success') {
            console.log("Success");
            var customer = data;
            for (var index in data) {
                cus = customer[index];
                var tableRow = '<tr><td>' + cus.customerID +
                    '</td><td><a href="custdetail.html" onClick="setCookie(' + index + ')">' +
                    cus.companyName + '</a></td><td>' +
                    cus.contactName + '</td><td>' +
                    cus.contactTitle + '</td></tr>';
                $('#customer_table').append(tableRow);
            }
        } else {
            console.log("Something went wrong");
        }
    });
});

function setCookie(index) {
    var cus = index;
    document.cookie = cus;
}