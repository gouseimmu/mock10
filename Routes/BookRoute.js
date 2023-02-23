const express = require('express');

const BookingModel = require('../Models/BookingModel');

const BookRoute = express.Router();

BookRoute.post('/',async(req,res)=>{
    const obj = req.body;
    try{
       let boook = new BookingModel(obj);
       await boook.save();
       res.send('booked done')
    }catch(err){
        res.send(err);
    }
})


BookRoute.post('/',async(req,res)=>{
    let obj = req.body;
    try{
       let booking = await BookingModel.find();
       res.send({data:booking,status:200});
    }catch(err){
        res.send(err);
    }
})
module.exports = BookRoute