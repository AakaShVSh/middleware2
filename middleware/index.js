let take = require("express");
let app = take();

app.use(logger)

app.get("/books",(req,res) => {
    res.send("/books");
})



app.get("/libraries",check("librarian"),(req,res) => {
    res.send({route:"/libraries",permission:req.permission});
})

app.get("/authors",check("author"),(req,res) => {
    res.send({route:"/authors",permission:req.permission})
})

function check(para){

  return  function checkPermission(req,res,next){

        if(req.path == "/libraries"){
            req.permission = true;
            next()
        }
        else if(req.path == "/authors"){
            req.permission = true;
            next()
        }
        else{
        req.permission = false;
        }
       
    }

}



function logger(req,res,next){
    
    if(req.path=="/books"){
        req.permission = true;
    }
   else if(req.path=="/libraries"){
        req.permission = true;
    }
   else if(req.path=="/authors"){
        req.permission = true;
    }
    next();
}

app.listen(5000, () => {{
    console.log("running on 5000 portal")
}})