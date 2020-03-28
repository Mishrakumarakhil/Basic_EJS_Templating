var express=require("express");
var app=express();

app.set('view engine','ejs');


app.get('/',(req,res)=>{

    res.render('index');

});

app.get('/info',(req,res)=>{

    res.render('info');

});


app.get('/profile/:name',(req,res)=>{

var info ={age:24 ,job :'UI Developer',hobbies:['playing TT' ,'playing cricket' ,'cooking'],contact :9330282697};
res.render('profile',{person:req.params.name ,info:info});
});
app.listen(3000);
