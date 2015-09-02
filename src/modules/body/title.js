
module.exports = function(info) {

  var data = {};

  data.component = {
    "role": "header",
    "layout": "header",
    "components": [
      {
        "role": "title",
        "text": info.text,
        "layout": "main",
        "textStyle": "main"
      },
      {
        "role": "author",
        "text": info.author,
        "layout": "author",
        "textStyle": "author"
      },
      {
        "role": "byline",
        "text": info.published,
        "textStyle": "byline"
      }
    ]
  };

  data.layouts = {
    "header": {
      "ignoreDocumentMargin": true,
      "margin": {
        "top": 8,
        "bottom": 8
      }
    },
    "main": {
      "columnSpan": 7,
      "columnStart": 0,
      "margin": {
        "top": 0,
        "bottom": 24
      }
    },
    "author": {
      "margin": {
        "bottom": 8
      }
    }
  };

  data.styles = {

  };

  data.textStyles = {
    "main": {
      "fontName": "HelveticaNeue-Bold",
      "fontSize": 56,
      "lineHeight":62,
      "linkStyle": {
        "textColor": "#222"
      }
    },
    "author": {
      "fontName":"HelveticaNeue-Bold"
    },
    "byline": {
      
    }
  };

  return data;
  
};


