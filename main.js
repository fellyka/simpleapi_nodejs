//********** Necessary imports*/
const express = require('express');
const cors = require('cors');

//**********Initialization*/
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

const port = process.env.PORT;

//**********Routing */
app.get('/', (req, res)=>{
    res.send('<h1>Api creation</h1>')
});

//*********Starting the app */
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})