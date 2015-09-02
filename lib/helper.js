/**
 * Helper functions
 * @module  lib/helper
 */

var fs = require('fs'),
    mkdirp = require('mkdirp'),
    _ = require('lodash');

module.exports = (function(){

    var Helper = {};

    /**
     * get processing options
     * @param  {String} id parameter id
     * @return {String}    value
     */
    Helper.getOpt = function(id) {
        var args = {};
        process.argv.forEach(function (val, index, array) {
            var sp = val.split('='),
                param = sp[0] || '',
                data = sp[1];

            if (param.length > 0 && /^--/i.test(param) && typeof data !== 'undefined') {
                data = (data === 'true') ? true : (data === 'false') ? false : data;
                args[param.replace(/^--/i, '')] = data;
            }
            
        });

        return (args[id]) ? args[id] : undefined;

    };

    /**
     * get environment type
     * @return {String} environment value
     */
    Helper.getEnv = function() {

        return Helper.getOpt('env') || 'dev';

    };

    /**
     * create directory
     * @param  {String} path directory path
     */
    Helper.createDir = function(path) {
        if (!fs.existsSync(path)) {
            mkdirp.sync(path);
        }
    };

    /**
     * get the file name
     * @param  {String}  path full path
     * @param  {Boolean} ext  return with extension
     * @return {String}
     */
    Helper.getFilename = function(path, ext) {
        var arr = path.split('/'),
            filename = arr[arr.length - 1];

        var ret;

        if (ext) {
            ret = filename;
        } else {
            var sp = filename.split('.');
            if (sp.length > 1) {
                ret = (sp.slice(0, sp.length - 1)).join('.');
            } else {
                ret = filename;
            }
        }
        
        return ret;
    };

    /**
     * remove multiple slashes
     * @param  {String} path path string
     * @return {String}
     */
    Helper.cleanPath = function(path) {
        return path.replace(/\/+/g, '/');
    };
    
    return Helper;

}());