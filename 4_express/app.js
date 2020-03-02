const express = require("express");
const app = express();


app.get("/", (req, res) => {
    //console.log("is called");
    return res.send({ message: "response is here "});
});

app.get("/about", (req, res) => {
    return res.send({ About: "I am mama bear"});
})

app.listen(8080);