
module.exports = function(info) {

  var data = {};

  data.component = {
    "role": "container",
    "layout": "heading",
    "components": [
      {
        "role": "header",
        "layout": "image",
        "style": "image",
        "behavior": {
          "type": "parallax",
          "factor": 0.6
        }
      },

      {
        "role": "caption",
        "text": [info.caption, (info.credit) ? (' (' + info.credit + ')') : ''].join(''),
        "textStyle": "caption",
        "layout": "caption"
      },

      {
        "role": "divider",
        "layout": "divider",
        "stroke": {
          "color": "#d7d7d7"
        }
      }
    ]
  };

  data.layouts = {
    "heading":  {
      "columnStart": 0,
      "columnSpan": 7,
      "ignoreDocumentMargin": true,
      "margin": {
        "top": 0,
        "bottom": 32
      }
    },
    "image": {
      "columnStart": 0,
      "columnSpan": 7,
      "ignoreDocumentMargin": true,
      "minimumHeight": "42vh",
      "margin": {
        "top": 0,
        "bottom": 0
      }
    },
    "caption": {
      "horizontalContentAlignment": "center",
      "margin": {
        "top": 32,
        "bottom": 32
      }
    },
    "divider": {
      "columnStart": 0,
      "columnSpan": 7,
      "ignoreDocumentMargin": true
    }
  };

  data.styles = {
    "image": {
      "fill": {
        "type": "image",
        "URL": "bundle://"+info.image,
        "fillMode": "cover",
        "verticalAlignment": "center"
      }
    }
  };

  data.textStyles = {
    "caption": {
      "textAlignment": "center",
      "fontSize": 12,
      "textColor": "#666",
      "lineHeight": 18
    }
  };

  return data;

};


