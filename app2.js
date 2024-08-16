const express = require('express')
var port = 3000
var app = express()
var data = [{
    id:"1",
    first_name:"Sadok",
    last_name: "Ghanouchi" ,
    email:"example@gmail.com"
}]
var id = 1

app.use(express.json())

app.get('/',(req,res)=>{
res.send(data)
})


app.post('/',(req,res)=>{
    var x = req.body
    x.id = id++
    data.push(x)
    res.send(data)
    
})
app.delete('/:id',(req,res)=>{
    console.log(req.params);
const id =req.params.id;
users = users.filter((user)=> user.id !== id )
res.send(`${id} deleted successfully from database`)
})


app.patch('/:id',(req,res)=>{
    const id =req.params.id;
    const {first_name,last_name,email}=req.body;
    const user = data.find((user)=>user.id ===id)
    if(user){
        user.first_name=first_name;
        user.last_name= last_name;
        user.email=email;
        res.status(202).send(user)

    }
    // if(first_name) user.first_name = first_name;
    // if(last_name) user.last_name= last_name;
    // if(email) user.email=email;
})
app.put('/:id',(req,res)=>{
    var id = Number(req.params.id)
    var {name} = req.body
    console.log(name)
    
    
    var idToUpdate = data.filter((ele)=>{
    return ele.id === id
    })
    console.log(idToUpdate[0]);
    
    if(idToUpdate){
    idToUpdate[0].name = name
    }
    res.status(200).send(idToUpdate)
    
    })

    app.listen(3000,()=>{
        console.log('server is running on port'+''+port);  
    })
    


    
