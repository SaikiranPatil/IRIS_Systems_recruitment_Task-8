if (window.location.pathname == "/add-user") {
    document.getElementById("add-user").submit(function (event) {
        alert("Data inserted sucessfully");
    })
}

if (window.location.pathname == "/update-user") {
    document.getElementById("update-user").addEventListener("submit", function (event) {
        event.preventDefault();

        var unindexed_array = $(this).serializeArray();
        var data = {}

        $.map(unindexed_array, function (n, i) {
            data[n['name']] = n['value']
        })

        var urlString = window.location.href

        var baseUrl = new URL(urlString)

        data.id = baseUrl.searchParams.get("id")

        var request = {
            "url": "http://localhost:8080/api/users/" + data.id,
            "method": "PUT",
            "data": data
        }

        $.ajax(request).done(function (response) {
            alert("Data updated sucessfully")
        })
    })
}

if (window.location.pathname == "/") {
    $ondelete = $(".sbt-btn");
    $ondelete.click(function () {
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:8080/api/users/${id}`,
            "method": "DELETE"
        }

        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request).done(function (response) {
                alert("Data deleted sucessfully!");
                location.reload();
            })
        }
    });
}