const router = require("express").Router();

const bcrypt = require("bcrypt");
const saltRounds = 10; 

/* bcrypt.hash("password", saltRounds, (error, hashedPassword) => {
    if(error) {
        console.log(error)
    }
    console.log(hashedPassword)
}) */

/* bcrypt.compare("password", "$2b$10$YoHngHbbp2BhsytGdrIhsuw.51/9CC8FcawC2SBqSeHyjAneFkYWW", (error, isSame) => {
    if(error) {
        console.log(error)
    }
    console.log(isSame)
}) */


const User = require("../models/User");


////////////user - login
router.post("/users/login", async (req, res) => {
    const { username, password } = req.body;
    if(username && password) {
        //has password and username
        const users = await User.query().where({username: username}).limit(1);
        const user = users[0];

        if(!user) {
            return res.status(404).send({response: "wrong username"})
        }

        bcrypt.compare(password, user.password, (error, isSame) => {
            if(error) {
                return res.status(500).send({});
            }

            if(!isSame) {
                return res.status(404).send({});
            } else {
                return res.send({username: user.username})
            }
        })
       /*  if(user.password !== password) {
            return res.status(404).send({response: "wrong password"})
        } else {
            return res.send({response: {username: user.username}})
        } */
    } else {
    return res.send({ response: "missing username or password"});
    }
})


//////////user - signup

router.post("/users/register", (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if(username || password || password === repeatPassword) {
        if(password.length < 8) {
            return res.send({response: "password does not fulfill the requirements"})
        } else {
            bcrypt.hash(password, saltRounds, async (error, hashedPassword) => {
                if(error) {
                   return res.status(500).send({})
                }
                try{
                    const existingUser = await User.query().select().where({username: username}).limit(1);

                    if(existingUser[0]) {
                        return res.status(404).send({response: "user already exists"})
                    }
                    const newUser = await User.query().insert({
                        username, 
                        password: hashedPassword
                    })
                    return res.status(200).send({response: newUser.username})
                } catch(error) {
                    return res.status(500).send({response: "something went wrong with the db"});
                }
            })
        }

    } else {
        return res.status(404).send({response: "missing fields"});
    }
})

module.exports = router;