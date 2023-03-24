const http = require('http');
const server = http.createServer((req, res)=>{     //req = gives what is the request has been made by the user
    if(req.url === '/'){                          // res = gives waht is the response regarding that request
        res.end('welcome to our home page')
    }else if(req.url === '/about'){
        res.end('here is our short history')
    } 
    
    else{                                     
    res.end(`
    <h1>Oops!</h1>
    <p>We cant  see, to find the page you are looking for </p>
    <a href="/">back home</a>
    `)  
    }                                                      
})

server.listen(5000)       // on which port our server is going to listen that is 5000