
var requireDir = require('require-dir'),
    config = require(__dirname + '/config.js'),
    Helper = require(config.libDir + '/helper.js'),
    _ = require('lodash'),
    tasks = requireDir(config.baseDir + '/tasks', { recurse: true });

if (!config.src || !config.dest) {
    console.log("no source or destination!");
    return false;
}

// create destination directory
Helper.createDir(config.dest);

module.exports = function(grunt) {

    var GRUNT_TASKS = {},
        GRUNT_TASKS_LIST = [];

    // add build config
    GRUNT_TASKS['_config'] = config;

    // process tasks
    for (var key in tasks) {
        var obj = {};

        // custom stuff
        if (key.indexOf('custom-') > -1) {

            tasks[key](grunt, {
                config: config,
                Helper: Helper,
                taskList: GRUNT_TASKS_LIST
            });

        } else {

            obj[key] = tasks[key](grunt, {
                config: config,
                Helper: Helper,
                taskList: GRUNT_TASKS_LIST
            });

            _.assign(GRUNT_TASKS, obj);

        }
   
    }
    
    // load all npm dependencies for grunt
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    
    // set tasks
    GRUNT_TASKS_LIST = GRUNT_TASKS_LIST.concat([
        //'clean',
        'copy'
    ]);

    grunt.registerTask('default', GRUNT_TASKS_LIST);
    grunt.initConfig(GRUNT_TASKS);

};