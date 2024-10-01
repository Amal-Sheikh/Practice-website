const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;
const home = fs.readFileSync("./")
const about = fs.readFileSync("./about.html")
const contact = fs.readFileSync("./contact.html")
const services = fs.readFileSync("./services.html")


const server = http.createServer((req, res) => {
    console.log(req.url)
    url = req.url;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    if (url ==="./"){
        res.end(home)
    }
    else if(url == "./about"){
        res.end("hellogffdd world")
    }
    else if(url == "./services"){
        res.end("helloyyuu world")
    }
    else if(url == "./contact"){
        res.end("hhhhhello world")
    }
    else{
        res.end(404 )
    }
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// node server.js