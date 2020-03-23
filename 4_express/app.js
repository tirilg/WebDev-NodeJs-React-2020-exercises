const express = require("express");
const app = express();
var bodyParser = require('body-parser');


// for parsing application/json
app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 

//the folder public will be the static folder so you can access the files inside
//be aware the client can see everything inside the public folder
app.use(express.static(__dirname + '/public')) 
 
// parse application/json
app.use(express.json())


app.get("/", (req, res) => {
    console.log(__dirname);
    return res.sendFile("index.html");
   
});

app.get("/pathvariable/:customvalue/:multiple", (req, res) => {
    console.log(req.params);
    return res.send({"value":"hey"});
});

/* app.get("/time", (req, res) => {
    const d = new Date();
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(d)
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
    const hour = d.getHours()
    const minutes = d.getMinutes()

    return res.send({"day":day, "month":month, "year":year, "time": hour + ":" + minutes})
}); */


const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/time", (req, res) => {
    const date = new Date();
    const localTime = date.toLocaleTimeString()

    return res.send({
        time: date.getHours() + ":" + date.getMinutes(),
        timev2: localTime,
        weekday: weekdays[date.getDay()],
        weekdayv2: date.toLocaleDateString("en-us", {weekday: "long"})
    });
});

app.get("/search", (req, res) => {
    //querystring
    console.log(req.query);
    return res.send({})
})


/* CRUD API */

//cars array
let aCars = [
    {"id": 1, "brand": "bmw", "type":"sedan"},
    {"id": 2, "brand": "opel"},
    {"id": 3, "brand": "audi"},
    {"id": 4, "brand": "mercedes"},
]

let currentId = 4;

//get all cars
app.get("/cars", (req,res) => {
    return res.send({ "response": aCars });
});

//get car by id
app.get("/cars/:id", (req, res) => {
    const id = req.params.id
    const foundCar = aCars.find(car => car.id === Number(id))

    return res.send({ "response" : foundCar })
})

//create a car
app.post("/cars", (req, res) => {
    const newCar = req.body;
    console.log(newCar)
    newCar.id = ++currentId;
    aCars.push(newCar)

    return res.send({ "response": newCar})
})


//update a car 
app.put("/cars/:id", (req, res) => {
    const foundIndex = aCars.findIndex(car => car.id === Number(req.params.id))
    console.log(req.body)
    const newCar = { ...aCars[foundIndex], ...req.body };
    console.log(newCar)
    aCars[foundIndex] = newCar;

    return res.send({ "response": newCar})
})

//delete a car 
app.delete("/cars/:id", (req, res) => {
    aCars = aCars.filter(car => car.id !== Number(req.params.id))
    return res.send({"response" : aCars})
});


//listen to server
app.listen(9090, (error) => {
    if (error) {
        console.log("error running the server");    
    }
    console.log("the server is running on port", 9090);
});




