const express = require ("express") ;



const app = new express();

// log requests
//app.use(morgan("tiny"));

//parse request to body parser
//app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs") ;

//load assets
//app.use("/css" , express.static(path.resolve(__dirname,"assets/css")));
//app.use("/images" , express.static(path.resolve(__dirname,"assets/images")));

app.use(express.static("views"));

app.get ("/" ,(req,res) => {
    res.render("p");
})

app.listen("4000");
console.log('Server is running ... ');