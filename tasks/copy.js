
var _ = require('lodash');

module.exports = function(grunt, prop) {

    var config = prop.config,
        Helper = prop.Helper,
        taskList = prop.taskList,
        templating = require(config.libDir + '/templating.js');

    var task = {

        'files': {
            expand: true,
            cwd: config.src,
            src: ['**/*', '!**/*.json'],
            dest: config.dest,
            filter: 'isFile'
        },

        'generator': {
            expand: true,
            cwd: config.src,
            src: ['**/generator.json'],
            dest: config.dest,
            filter: 'isFile',
            options: {

                process: function(content, srcpath) {
                    // todo: process here
                    content = templating(prop, content);
                    return content;

                }

            },
            rename: function(dest, src) {
                return dest + "/article.json";
            }

        }

    };

    return task;

};

