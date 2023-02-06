const express = require("express")
const router = express.Router()

router.get('/login', (req, res) =>{
    res.render("login")
});

router.post('/login-registration', (req, res) =>{
    const username_value = 'admin'
    const password_value = '123456'

    let usr = req.body.username
    let pwd = req.body.password

    if(usr == username_value && pwd == password_value){
        res.render('registration');
    } else{
        res.send("Sorry! Invalid Password")}
})

router.get('/registration', (req, res) =>{
    res.render("registration")
});

router.post('/save-registration', (req, res) =>{
    let firstNamE = req.body.fname
    let lastName = req.body.lname
    let address = req.body.address
    let age = req.body.age
    let email = req.body.email
    res.render('information', {firstNamE:firstNamE,  lastName:lastName, address:address, age:age, email:email})
})

module.exports = router