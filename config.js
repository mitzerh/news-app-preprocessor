/**
 * configuration properties
 * @module  build/config
 */
module.exports = (function(){

    var base = __dirname,
        libDir = base + '/lib',
        Helper = require(libDir + '/helper.js');

    /**
     * @namespace
     */
    var config = {};

    /**
     * environment type
     * @member
     */
    config.env = Helper.getEnv();
    
    /**
     * libraries directory
     * @member
     */
    config.libDir = libDir;

    /**
     * base directory path
     * @member
     */
    config.baseDir = base;

    /**
     * source files info
     */
    // config.src = config.baseDir + '/src';
    config.src = Helper.getOpt("src");
    
    /**
     * destination files info
     */
    config.dest = Helper.getOpt("dest") || config.src;

    /**
     * modules
     */
    config.modules = Helper.getOpt("modules") || (base + '/src/modules');

    return config;

}());