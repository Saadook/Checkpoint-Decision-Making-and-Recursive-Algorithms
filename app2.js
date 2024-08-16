const express = require('express')
var port = 3000
var app = express()
var data = []
var id = 1

app.use(express.json())

app.get('/',(req,res)=>{
res.send(data)
})



app.listen(3000,()=>{
    console.log('server is running on port'+''+port);  
})

app.get('/',(req,res)=>{
    res.send('GET request to the homepage')
    

})
app.post('/',(req,res)=>{
    var x = req.body
    x.id = id++
    data.push(x)
    res.send(data)
    
})
    
