const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

//fetch routes
const auth_routes = require("./src/routes/auth.routes");
const question_routes = require("./src/routes/surveyquestion.routes");
const response_routes = require("./src/routes/surveyresponse.routes");
const fetch_routes = require("./src/routes/fetch.routes");



//configure database
require('./config/mariadb.config');


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))


//mount routes here
app.use(auth_routes);
app.use(question_routes);
app.use(response_routes);
app.use(fetch_routes);





//error handling middleware
app.use((req,res,next) => {
    next({status:404, msg:"Resource not found"})
})

app.use((error,req,res,next)=>{
    console.log("Error:",error);
    let status = error.status || 500;
    let msg = error.msg || error
    res.status(status).json({result: null, status: false,msg:msg})
});



//local configuration

app.listen(7001,"localhost",(err) =>{
	console.log("Server started at 7001");
	console.log("Press ctrl + c to quit");
});
