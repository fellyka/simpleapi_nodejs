const {DataTypes} = require('sequelize');
const DB = require('../db.config');

//**********Cocktail  Model Definition*/
const Cocktail = DB.define('Cocktail',{
    id:{
        type:DataTypes.INTEGER(8),
        primarykey: true,
        autoIncrement: true
    },
    user_id:{
        type:DataTypes.INTEGER(8),
        allowNull:false
    },
    nom:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull: false,
        defaultValue:''
    },
    recette:{
        type:DataTypes.TEXT,
        allowNull: false,
        defaultValue:''
        
    },
},
{paranoid:true});

module.exports = Cocktail;