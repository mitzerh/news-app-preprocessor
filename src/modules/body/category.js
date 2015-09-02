
module.exports = function(info) {
  
  var data = {};

  data.component = {
    "role": "container",
    "layout": "container",
    "components": [
      {
        "role": "heading",
        "text": "  " + info.text + "  ",
        "textStyle": "heading"
      }
    ]
  };

  data.layouts = {
    "container": {
      "margin": 4
    }
  };

  data.styles = {

  };

  data.textStyles = {
    "heading": {
      "fontName": "HelveticaNeue-Bold",
      "fontSize": 14,
      "lineHeight": 20,
      "textColor": "#fff",
      "backgroundColor": "#183a52",
      "textTransform": "uppercase"
    }
  };

  return data;

};


