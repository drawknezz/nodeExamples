"use strict";
var assert = require('assert');
var jasmine = require('jasmine');
var english = require('yadda').localisation.English;
var Wall = require('../js/Wall.js');
var wall;

module.exports = english.library()
    .given('$NUM green bottles are standing on the wall', function(number, next){
        wall = new Wall(number);
        next();
    }).when('$NUM green bottle accidently falls', function(number, next){
        wall.fall();
        next();
    }).then("There are $NUM green bottles standing on the wall", function(number, next){
        assert.equal(number, wall.bottles);
        //expect(number).toEqual(wall.bottles);
        next();
    });