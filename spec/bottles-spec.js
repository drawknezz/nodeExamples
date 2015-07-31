"use strict";
var SpecReporter = require('jasmine-spec-reporter');
jasmine.getEnv().addReporter(new SpecReporter());

var Yadda = require('yadda');
Yadda.plugins.jasmine.StepLevelPlugin.init();

new Yadda.FeatureFileSearch('./features/bottles.feature').each(function(file){
    featureFile(file, function(feature){
        var library = require('./steps/bottles-library.js');
        var yadda = Yadda.createInstance(library);

        scenarios(feature.scenarios, function(scenario){
            steps(scenario.steps, function(step, done){
                yadda.run(step, done);
            });
        });
    });
});