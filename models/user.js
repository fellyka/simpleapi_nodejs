//********** Necessary imports*/
const {DataTypes} = require('sequelize');
const DB = require('../db.config');

//**********User Model Definition*/
const User = DB.define('User',{
    id:{
        type:DataTypes.INTEGER(8),
        primarykey: true,
        autoIncrement: true
    },
    nom:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    prenom:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING(64),
        is: /^[0-9a-f]{64}$/i
    },
},
{paranoid:true});//Allow softdelete


module.exports = User;