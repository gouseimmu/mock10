const express = require('express');
const UserModel = require('../Models/UserModel')

const UserRoute = express.Router();

UserRoute.get("/", async (req, res) => {
    try {
          let Users = await UserModel.find();
          res.send(Users);
    } catch (err) {
      res.send(err);
    }
  });

  UserRoute.post("/register", async (req, res) => {
    const {name , email ,password} = req.body
    try {
        let user = new UserModel({name,email,password})
        await user.save();
        // res.status(200)
        res.send({msg:`Registered SuccessFully`, status:201})
    } catch (err) {
      res.send(err);
    }
  });
  UserRoute.post("/login", async (req, res) => {
    const {email ,password} = req.body
    try {
        let user = await UserModel.find({email:email});
        if(user.length>0){
            if(user[0].email === email && user[0].password === password){
                res.send({msg:"Login SuccesFull",Token:`${user[0].name}123`,status:201})
            }else{
                res.send({msg:"invalid"})
            }
        }else{
            res.send({msg:"login Failed"})
        }
    } catch (err) {
      res.send(err);
    }
  });

module.exports = UserRoute