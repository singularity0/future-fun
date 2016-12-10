let port = require('./app/config/constants').port;
let prodUrl = require('./app/config/constants').prodUrl;


let express = require("express");

let app = express();
app.use(express.static(__dirname + "/public"));
app.set("view engine", "pug");
app.get("/", function(request, response) {
    response.send("Server is running");
});

app.listen(port, () => console.log(`Challenges is running at: ${port}\nProd version: ${prodUrl}`));