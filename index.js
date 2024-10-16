
const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("I am here ");
})


app.listen(process.env.PORT, () => {

    console.log(`Server running on port ${PORT}`);

});