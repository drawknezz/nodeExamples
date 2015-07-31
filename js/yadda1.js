"use strict";
var Yadda = require('yadda');
var steps = ['Step 1', 'Step 2', 'Step 3'];

var library = new Yadda.library();
library.define(/Step (\\d+)/, function(number){
    console.log('Step ' + number);
});

Yadda.createInstance(library).run(steps);