// 
const mongoose = require('mongoose');


const connection = mongoose.connect("mongodb+srv://gouseimmu:shaikgouse@cluster0.bvynd.mongodb.net/?retryWrites=true&w=majority")


module.exports = connection ; 