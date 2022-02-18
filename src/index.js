const express = require('express');
var bodyParser = require('body-parser');

const port = process.env.PORT||3000

const route = require('./routes/route.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/',(res,req)=>{
//    res.send("Welcome To Matadata Fetching ...")
// });

app.use('/', route);

app.listen(port, function() {
	console.log(`Express app running on ${port}`);
});