var http = require("http");
var url = require("url");

var server = http.createServer((req, res) => {

    var j = [
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        },
        // other product data ...
        {
            "id": 20,
            "title": "DANVOUY Womens T Shirt Casual Cotton Short",
            "price": 12.99,
            "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
            "rating": {
                "rate": 3.6,
                "count": 145
            }
        }
    ];

    // Parse URL with the second argument set to false
    var parsed = url.parse(req.url, false);

    console.log(parsed);

    // Extract the last part of the path for the product ID
    var g = parsed.pathname.split("/");
    var num = g[g.length - 1];  // Get the product ID from the last segment

    // Filter the product list based on the extracted product ID
    var data = j.filter((val, ind) => {
        return val.id == Number(num);
    });

    // Return the product as JSON or an error message if not found
    if (data.length === 0) {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Product not found" }));
    } else {
        res.end(JSON.stringify(data[0]));
    }

});

var port = 3009;
server.listen(port, () => {
    console.log("hi i am connected to " + "http://localhost:" + port);
});
