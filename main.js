//********** Necessary imports*/
const express = require('express');
const cors = require('cors');

const DB = require('./db.config')

//**********Initialization*/
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

const port = process.env.SERV_PORT;

//**********Routing */
app.get('/', (req, res)=>{
    res.send('<h1>Api creation</h1>')
});

//*********Starting the app at the same time while testing if the DB is connected*/
DB.authenticate()
   .then(()=>console.log('Connection to the Database was succesful'))
   .then(()=>{
             app.listen(port, ()=>{
                console.log(`Server running on port ${port}`);
    })
   })
   .catch(err=> console.error(`Sorry. We couldn't connect to the Database.\n${err}`))
