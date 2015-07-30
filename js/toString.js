"use strict";
var toString = function(){
    //var that = this;
    var str = [], i, cnt=0;
    var fn = function(obj){
        cnt+=1;
        for(i in obj){
            if(obj.hasOwnProperty(i) && i !== 'toString'){
                if(typeof obj[i] === 'object'){
                    console.log('recalling for an object, fn: ' + fn);
                    str.push(i + ' : {' + toString.call(obj[i]) + '}');
                }else{
                    str.push(i + ' : ' + obj[i]);
                }
            }
        }
    };
    fn(this);
    console.log('fn called ' + cnt + ' times...');
    return '{\n' + str.join(',\n') + '\n}';
};

var o = {
    name: 'newObj1',
    version: 1.3,
    main: function(){
        console.log('this is the main function');
    },
    model: {
        headers: {
            title: 'this is the header'
        },
        content: {
            value: 'content'
        }
    }
};

console.log(toString.call(o));