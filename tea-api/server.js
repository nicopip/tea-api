const express = require ('express')
const app = express()
const PORT = 8000 // for heroku

const cors =require('cors')
app.use(cors())

const tea = {
    'oolong':{
        'type': 'black',
        'waterTemp': 200,
        'caffine': true,
        'steepTimeSeconds': 180,
        'flavor': 'delicious'
    },
    'matcha':{
        'type': 'green',
        'waterTemp': 200,
        'caffine': false,
        'steepTimeSeconds': 180,
        'flavor': 'delicious'
    },
    'unknown':{
        'type': 'unknown',
        'waterTemp': 0,
        'caffine': false,
        'steepTimeSeconds': 0,
        'flavor': 'unknown'
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req,res)=>{ //query parameter
    const teaName = req.params.name.toLowerCase()
    if(tea[teaName]){
       res.json(tea[teaName]) 
    } else{
        res.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})