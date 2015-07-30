"use strict";
var http = require('http');

var toString = function(){
    var fn = function(obj, d){
        var str = [], i;
        for(i in obj){
            if(obj.hasOwnProperty(i) && i !== 'toString'){
                if(d <= 5){
                    if(typeof obj[i] === 'object'){
                        str.push(new Array(d).join('\t') + i + ' : ' + fn(obj[i], d+1));
                    }else if (typeof obj[i] === 'function') {
                        str.push(new Array(d).join('\t') + i + ' : function() {...}');
                    }else{
                        str.push(new Array(d).join('\t') + i + ' : ' + obj[i]);
                    }
                }else{
                    str.push(new Array(d).join('\t') + i + ' : {[too deep to print]}');
                }
            }
        }
        return '{\n' + str.join(',\n') + '\n' + new Array(d-1).join('\t') + '}';
    };
    return fn(this, 1);
};

http.createServer(function(req, res) {
    console.log("received this request: " + toString.call(req));
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello world\n');
}).listen(3000);
console.log('Server running at http://localhost:3000/');