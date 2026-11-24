import { createServer, Server,IncomingMessage, ServerResponse } from "http";

const server : Server  = createServer((req : IncomingMessage, res : ServerResponse) => {
    // console.log("request: ",req) //GET ; // POST;
    // console.log("Response: ",res);
    // console.log(req.url);
    // console.log(req.method);
    const url= req.url; // /;/products; /courses
    const method = req.method
    // console.log(url,method);
    
if (url === "/" && method === "GET") {
    // console.log("This is root route");
    res.writeHead(200,{
        'content-type' : 'application/json',
    });
    res.end(JSON.stringify({message: "this is root route"}));

}else if(url?.startsWith("/products")){
    res.writeHead(200,{"content-type" : "application/json",

    })
    res.end(JSON.stringify({message:"this is a product Route"}) );
}else{
    res.writeHead(404,{
        "content-type":"application/json"
    });
    res.end(JSON.stringify({message: "this route is not defined"}));

}
    
},
);
server.listen(5000,()=>{
    console.log('Hello, server ');
    
})

// 7:28