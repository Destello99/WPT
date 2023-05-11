const http = require("http");
const url = require("url");
const fs = require("fs");
const m = require("./calc1")
var server = http.createServer(function (req, resp) {
    console.log(req.url);
    var q = url.parse(req.url, true);
    resp.writeHeader(200, { "content-type": "text/html" });
    switch (q.pathname) {
        case "/home":
            var rs = fs.createReadStream("./index.html");
            rs.pipe(resp);
            break;
        case "/submit-data":
            var a = parseInt(q.query.num1);
            var b = parseInt(q.query.num2);

            var op = q.query.cal;
            switch (q.query.cal) {
                case "add":
                    var add = m.add(a, b);
                    resp.write("ans : =" + add);
                    resp.end();
                    break;
                case "sub":
                    var sub = m.sub(a, b);
                    resp.write("ans : =" + sub);
                    resp.end();
                    break;
                case "mul":
                    var mul = m.mul(a, b);
                    resp.write("ans : =" + mul);
                    resp.end();
                    break;
                case "div":
                    var div = m.div(a, b);
                    resp.write("ans : =" + div);
                    resp.end();
                    break;
                default:
                    resp.write("Enter valid choice");
                    resp.end();
                    break;
            }

        case "/add_array":
            var n=[];
            console.log("Inside add array")
            var a = q.query.arrHdn.split(",");
           for(var j=0;j<a.length;j++){
              n.push(parseInt(a[j]));
           }
            var ans=m.sum(n);
            resp.write("ans: "+ans);
            resp.end();
           
            
            break;
        default:
            var rs = fs.createReadStream("./index.html");
            rs.pipe(resp);
            break;

    }

})
server.listen(3001, function () {
    console.log("Suru zal");
})