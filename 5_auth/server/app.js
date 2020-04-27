const express = require("express");
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//////////////     Setup the database
const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require("./knexfile.js");

const knex = Knex(knexFile.development);

//give knex instance to objection
Model.knex(knex)

//set up routes with our server instance 
const usersRoute = require("./routes/users.js");
app.use(usersRoute)

async function knexQuery() {
    console.log(await knex.select().from('users'))
}

const User = require('./models/User.js')
app.get("/", async (req, res) => {
    return res.send({result: await User.query()});
})
/* app.get("/", async (req, res) => {
    //const result = await knex.select().from('users');
    const addresses = await knex.select().from('addresses')
    res.send(addresses);
}) */



/////////////     Start the server


const port = process.env.PORT || 9090;

//listen to server
app.listen(port, (error) => {
    if (error) {
        console.log("error running the server");    
    }
    console.log("the server is running on port", port);
});