$(function () {
    $("#customer_js").click(function () {
        $.get("../data/customers.json", function (response,search) {
            if (response == 'success') {
            var tableHead = '<tr><th>customerID</th><th>companyName</th><th>contactName</th><th>contactTitle</th></tr>';
            $('#get_customer').append(tableHead);
            var imdb = search.Search;
            for (var index in imdb) {
                var cus = imdb[index];
                var tableRow = '<tr><td>' + cus.customerID + '</td><td>' + cus.companyName + '</td><td>' + cus.contactName + '</td><td>' + cus.contactTitle + '</td></tr>';
                $('#datalist').append(tableRow);
                console.log(imdb);
            }
            }
        });
    });
});