const express=require("express");
const connection = require("./db");
const AuthRoute = require("./routes/authRoutes");
const MovieRoute = require("./routes/movieRoutes");
const cors=require('cors')
const app=express();
app.use(cors({
    origin: "http://localhost:5173",
    Credential:true
}))
app.use(express.json());
app.use("/user",AuthRoute)
app.use("/movie",MovieRoute)

app.listen(3000,()=>{
    try {
        connection
         console.log("Server are running at 3000")
    } catch (error) {
        console.log(error)
    }
})