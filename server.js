const express = require('express')
const cors = require('cors');
const app = express();
const routesApp = require("./router/route.js")
// app.use(cors)
const Port = process.env.PORT||3000;
app.use(express.json())

app.use('/api',routesApp)
app.get('/', (req, res) =>{
    res.status(200).json({message:"we sarted listing ...",data:"Anukul"})
})


app.listen(Port ,()=>{
    console.log(`listening on ${Port}`)
})