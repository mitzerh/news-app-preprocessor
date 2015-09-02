/* Basic data object structure */
module.exports = function(info) {

  var data = {};

  data.component = {
    "role": "divider",
    "layout": "divider",
    "stroke": {
      "color": "#183a52",
      "width": 30
    }
  };

  data.layouts = {
    "divider": {
      "columnStart": 0,
      "columnSpan": 7,
      "ignoreDocumentMargin": true,
      "margin": {
        "top": 32
      }
    }
  };

  data.styles = {

  };

  data.textStyles = {
    
  };

  return data;

};
