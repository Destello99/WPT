const http = require("http")
const url = require("url")
const fs = require("fs")

var h = http.createServer(function(req, resp){
    resp.writeHeader(200,{"content-type":"text/html"});
    var q = url.parse(resp.url, true);
    switch(q.pathname){
        case "/home":
            
            break;
    }

})