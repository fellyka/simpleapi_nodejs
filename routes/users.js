//********** Necessary imports*/
const express = require('express');
const User = require('../models/user')

//********** Express Router configuration*/
let router = express.Router();

//********** User routing*/
router.get('', (req, res)=>{
    User.findAll()
        .then(users => res.json({data : users}))
        .catch(err =>res.status(500).json({message:"Database Error", error: err}))

});
router.get('/:id',(req,res)=>{
    let userId = parseInt(req.params.is)

    if(!userId){
        return res.json(400)({message:`${userId} should be a number`})
    }
    //id found?
    User.findOne({where : {id: userId}, raw:true})
        .then(user =>{
            if((user==null)){
                return res.status(404).json({message:'User not Existing !'})
            }
     //User found?
        return res.json({data:user})       
        })
          .catch(err =>res.status(500).json({message:'Database Error', error:err}))
});
router.put('',(req,res)=>{
    const {nom, prenom, email, password} = req.body

    if(!nom || prenom || email || password){
        return res.status(400).json({message:'Missing Data'})
    }

    User.findOne({where:{email:email}, raw:true})
        .then(user =>{
            if(user != null){
                return res.status(409).json({message:`The user ${name} already exists`})
            }

            User.create(req.body)
                .then(user =>res.json({message:'User Created', data:user}))
                .catch(err =>res.status(500).json({message:'Database Error', error:err}))
        })
        .catch(err=> res.status(500).json({message:'Database Error', error:err}))
});
router.patch('/:id');
router.delete('/:id');

