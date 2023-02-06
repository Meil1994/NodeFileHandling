const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))

const userRouter = require('./routes/users')
app.use('/users', userRouter)


app.listen(3000);
console.log("Check port 3000")


