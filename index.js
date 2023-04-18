//require express
const express = require("express");

const app = express();

app.get('/', (req,res)=>{

    //send html file
    res.sendFile(__dirname + "/public/home.html")
});


//files to use
app.use(express.static(__dirname + '/public'))

//define port
const port = process.env.PORT || 5000

//listen to port
app.listen(port, () => console.log('listening on port ' + port));