
var fs = require('fs'),
    config = require(__dirname + '/config.js'),
    Helper = require(config.libDir + '/helper.js'),
    templating = require(config.libDir + '/templating.js'),
    mkdirp = require('mkdirp');


// get source generator.json
var generatorFile = Helper.cleanPath(config.src + '/generator.json');
if (!fs.existsSync(generatorFile)) {
    console.log('error! source generator file does not exist: ' + generatorFile);
    return false;
}

// create destination if it does not exist
if (!fs.existsSync(config.dest)) {
    Helper.createDir(config.dest);
}

var raw = fs.readFileSync(generatorFile, { encoding: 'utf8' }),
    content = templating({ config: config }, raw);

console.log('writing article.json file to destination..');
var destinationFile = Helper.cleanPath(config.dest + '/article.json');

fs.writeFileSync(destinationFile, content, { encoding: 'utf8' });
console.log('output: ' + destinationFile);
console.log('done.')
