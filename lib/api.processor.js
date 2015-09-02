var fs = require('fs'),
    _ = require('lodash'),
    toMarkdown = require('to-markdown'),
    config = require(__dirname + '/../config.js'),
    Helper = require(config.libDir + '/helper.js');

module.exports = function(proccessType, content) {
    
    content = JSON.stringify(content);

    var ret = {},
        data = JSON.parse(content),
        doc = data.response.docs[0],
        items = [];

    // as more conversions happen..
    switch (proccessType) {

        case "body-to-markdown":

            // parse body
            var body = toMarkdown(doc.body),
                // separate body paragraph
                para = cleanUpEmptyArr(body.split('\n'));
            
            ret = {
                result: para
            };

            break;

    }

    return ret;

};

function cleanUpEmptyArr(arr) {
    var ret = [];
    while (arr.length > 0) {
        var item = _.trim(arr.shift());
        if (item !== '') {
            ret.push(item);
        }
    }
    return ret;
}
