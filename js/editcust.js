$(function () {

     // validation
     $('#mainform').submit(function (event) {
        var form = $('#mainform')[0];
        if (form.checkValidity() === false) {
            event.preventDefault();
        }
        $(this).addClass('was-validated');
    });

    $.get("./data/customers.json", function (data, status) {
        if (status == 'success') {
            console.log("เกือบเสร็จแล้ว!!");
            var customer = data;
            var cus = customer[document.cookie];

            var cus_id = cus.customerID
            $("#id").val(cus_id);

            var companyname = cus.companyName
            $("#companyname").val(companyname);

            var contactname = cus.contactName
            $("#contactname").val(contactname);

            var contacttitle = cus.contactTitle
            $("#contacttitle").val(contacttitle);

            var street = cus.address.street
            $("#street").val(street);

            var city = cus.address.city
            $("#city").val(city);

            var region = cus.address.region
            $("#region").val(region);

            var postalcode = cus.address.postalCode
            $("#postalcode").val(postalcode);

            var country = cus.address.country
            $("#country").val(country);

            var phone = cus.address.phone
            $("#phone").val(phone);

        } else {
            console.log("เกือบไปแล้ว!!");
        }
    });
});