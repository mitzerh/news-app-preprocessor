
module.exports = function(info) {

  var data = {
    "version": "0.10",
    "identifier": info.identifier,
    "title": info.title,
    "language": "en",
    "layout": {
      "columns": 7,
      "width": 1024,
      "margin": 155,
      "gutter": 40
    },
    "documentStyle": {
      "backgroundColor": "#222"
    },
    "components": [

    ],
    "componentLayouts": {

    },
    "componentStyles": {

    },
    "componentTextStyles": {
      "default": {
        "fontName": "HelveticaNeue",
        "fontSize": 14,
        "textColor": "#ccc",
        "linkStyle": {
          "textColor": "#ccc"
        }
      },
      "default-body": {
        "fontName": "HelveticaNeue",
        "lineHeight": 30,
        "fontSize": 18
      },
      "default-heading": {
        "textColor": "#ccc"
      }
    }
  };

  return data;

};
