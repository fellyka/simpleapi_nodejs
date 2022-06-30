//********** Necessary imports*/
const {Sequelize} = require('sequelize');

//*********Connection to the DB */
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{

    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    dialect : 'mysql',
    logging :true
});

//*********Models synchronization*/
//sequelize.sync()

module.exports = sequelize;