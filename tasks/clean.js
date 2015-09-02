
var _ = require('lodash');

module.exports = function(grunt, prop) {

    var config = prop.config,
        Helper = prop.Helper,
        taskList = prop.taskList;
    
    var task = {

        'dest': [config.dest + '/**']

    };

    return task;

};

