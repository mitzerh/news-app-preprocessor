var _ = require('lodash'),
    beautify = require('js-beautify'),
    stripComments = require('strip-comments');

module.exports = function(prop, content) {

    var config = prop.config,
        Processor = require(config.libDir + '/processors.js')(prop);

    var data = JSON.parse(content);

    // get template to use
    var template = Processor.getTemplate(data.template);

    // load components
    for (var i = 0; i < data.items.length; i++) {
        var item = data.items[i];

        var componentInfo = Processor.loadComponentInfo(item);

        if (componentInfo) {
            // components
            template.components.push(componentInfo.component);
            // layouts
            _.merge(template.componentLayouts, componentInfo.layouts);
            // styles
            _.merge(template.componentStyles, componentInfo.styles);
            // textStyles
            _.merge(template.componentTextStyles, componentInfo.textStyles);
        }
    }

    //console.log(template)
    var processed = beautify(JSON.stringify(template), { indent_size: 2 });

    return processed;

};