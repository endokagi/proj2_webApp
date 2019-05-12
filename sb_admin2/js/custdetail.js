$(document).ready(function () {
    $.get("./data/customers.json", function (data, status) {
        if (status == 'success') {
            console.log("Success");
            var customer = data;
            var cus = customer[document.cookie];
            var tableRow = '<tr><td>' + cus.customerID +
                '</td><td>' + cus.companyName +
                '</td><td>' + cus.contactName +
                '</td><td>' + cus.contactTitle +
                '</td><td>'
                + "Street : " + cus.address.street + "<br>"
                + "City : " + cus.address.city + "<br>"
                + "Region : " + cus.address.region + "<br>"
                + "PostalCode : " + cus.address.postalCode + "<br>"
                + "Country : " + cus.address.country + "<br>"
                + "Phone number : " + cus.address.phone + '</td> </tr>'

            $('#customerdetail_table').append(tableRow);
        } else { 
            console.log("Something went wrong");
        }
    });
});