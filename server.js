const express = require('express');
var cors = require('cors')
const UserRoute = require('./Routes/UserRouter')
const connection = require('./Config/db');
const FlightRoute = require('./Routes/FlightRoutes');
const BookRoute = require('./Routes/BookRoute')

const app = express();
app.use(express.json());
app.use(cors({origin:"*"}))
app.use('/users',UserRoute)
app.use('/flights',FlightRoute)
app.use('/bookings',BookRoute)
app.get('/',(req,res)=>{
    res.send("Hello")
})


app.listen(process.env.PORT,async()=>{
    try{
        connection;
        console.log("conected to database")
    }
    catch(err){
        console.log(err)
    }
    console.log("Port is running 8080")
})


