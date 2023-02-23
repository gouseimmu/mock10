const express = require('express');

const FlightModel = require('../Models/FlightModel');

const FlightRoute = express.Router();

FlightRoute.get('/',async(req,res)=>{
    try{
        let flights = await FlightModel.find();
        res.send(flights);
    }catch(err){
        res.send(err);
    }
})
FlightRoute.get('/:id',async(req,res)=>{
    console.log(req.params.id)
    try{
        let flight = await FlightModel.findById(req.params.id);
        if(flight){
            res.send({data:flight,status:200});
        }else{
            res.send("Not Founded in DB")
        }
    }catch(err){
        res.send(err);
    }
})
FlightRoute.post('/',async(req,res)=>{
  let obj = {
    airline: req.body.airline,
    flightNo: req.body.flightNo,
    departure: req.body.departure,
    arrival: req.body.arrival,
    departureTime: req.body.departureTime,
    arrivalTime: req.body.arrivalTime,
    seats: req.body.seats,
    price: req.body.price
  }
    try{
        let flight = new FlightModel(obj);
        await flight.save();
        res.send({msg:'Success',status:201,data:flight});
    }catch(err){
        res.send(err);
    }
})

FlightRoute.patch('/:id',async(req,res)=>{
    let obj = req.body;
    console.log(obj);
    try{
        let flight = await FlightModel.findByIdAndUpdate(req.params.id,{obj});
        res.send({data:flight,status:204});
    }catch(err){
        res.send(err);
    }
})
FlightRoute.delete('/:id',async(req,res)=>{
    try{
        await FlightModel.findByIdAndDelete(req.params.id);
        res.send({msh:'deleted',status:202});
    }catch(err){
        res.send(err);
    }
})

module.exports = FlightRoute