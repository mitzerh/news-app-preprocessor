
var fs = require('fs'),
    _ = require('lodash');

module.exports = function(prop) {

    var config = prop.config,
        modules = config.modules,
        Helper = require(config.libDir + '/helper.js');

    var App = function() {

        var Proto = this;

        /**
         * Load the source file
         * @param  {Object} data info about the file
         * @return {Object}
         */
        Proto.readFile = function(data) {
            var path = getPath(data.type),
                req = require(path)(data.info);
            return req;
        };

        /**
         * get the template to use
         * @param  {Object} data info about the template
         * @return {Object}
         */
        Proto.getTemplate = function(data) {
            var ret = Proto.readFile(data);
            return ret;
        };

        /**
         * get the module to use
         * @param  {Object} info info about the module
         * @return {Object}
         */
        Proto.getModule = function(info) {
            var ret = null;
            if (moduleExists(info.type)) {
                ret = Proto.readFile(info);
                // filename
                var filename = Helper.getFilename(info.type);
                // set up main level layout/style/textStyles
                ret = Proto.setMainPropertyNames(filename, ret);
                // set up layout/style/textStyles
                ret.component = Proto.setComponentPropertyNames(filename, ret.component);
            }
            return ret;
        };

        /**
         * get the information about the module/component
         * @param  {Object} info
         * @return {Object}
         */
        Proto.loadComponentInfo = function(info) {
            return Proto.getModule(info);
        };

        Proto.setMainPropertyNames = function(prefix, data) {
            var props = ['layouts', 'styles', 'textStyles'];

            // set main component properties
            for (var i = 0; i < props.length; i++) {
                var id = props[i];
                if (data[id]) {
                    data[id] = setPropNames(prefix, data[id]);
                }
            }
            return data;
        };

        /**
         * set the component properties
         * @param {String} prefix the name of the module file
         * @param {Object} data
         */
        Proto.setComponentPropertyNames = function(prefix, data) {

            data = loopObject(prefix, data);

            return data;
        };

    };

    function loopObject(prefix, info) {

        var props = ['layout', 'style', 'textStyle'];

        for (var id in info) {

            var index = _.indexOf(props, id);

            if (_.indexOf(props, id) > -1 && typeof info[id] === 'string') {
                info[id] = setName(prefix, info[id]);
            } else if (_.isArray(info[id])) {
                info[id] = loopArray(prefix, info[id]);
            } else if (typeof info[id] === 'object') {
                info[id] = loopObject(prefix, info[id]);
            }

        }

        return info;

    }

    function loopArray(prefix, arr) {
        for (var i = 0; i < arr.length; i ++) {
            if (typeof arr[i] === 'object') {
                arr[i] = loopObject(prefix, arr[i]);
            }
        }
        return arr;
    }

    function moduleExists(path) {
        return (fs.existsSync(getPath(path))) ? true : false;
    }

    function getPath(path) {
        var ret = [config.modules, path + '.js'].join('/');
        return ret;
    }

    function toJSON(str) {
        return JSON.parse(str);
    }

    function setPropNames(prefix, data) {
        for (var id in data) {
            data[setName(prefix, id)] = data[id];
            delete data[id];
        }
        return data;
    }

    function setName(prefix, val) {
        var ret = [prefix, val].join('-');
        return ret;
    }

    return (new App());

};