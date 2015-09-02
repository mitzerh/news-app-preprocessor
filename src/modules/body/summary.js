
module.exports = function(info) {

  var data = {};

  data.component = {
    "role": "container",
    "layout": "container",
    "style": "container",
    "animation": {
      "type": "fade_in",
      "userControllable": true,
      "initialAlpha": 0.0
    },
    "components": [
      {
        "role": "heading",
        "layout": "heading",
        "text": "Summary Title Example",
        "textStyle": "heading"
      },
      {
        "role": "body",
        "layout": "content",
        "textStyle": "content",
        "text": getSummaryText(info.items),
        "format": "markdown"
      }
    ]
  };

  data.layouts = {
    "container": {
      "margin": {
        "top": 0,
        "bottom":32
      }
    },
    "heading": {
      "margin": {
        "bottom": 16,
        "top": 32
      }
    },
    "content": {
      "margin": {
        "bottom": 32
      }
    }
  };

  data.styles = {
    "container": {
      "border": {
        "all": {
          "width": 1,
          "color": "#d7d7d7"
        },
        "left": false,
        "right": false
      }
    }
  };

  data.textStyles = {
    "heading": {
      "textAlignment": "center",
      "fontSize": 28,
      "fontName": "HelveticaNeue-Bold"
    },
    "content": {
      "fontSize": 14
    }
  };

  function getSummaryText(items) {
    var arr = [];
    for (var i = 0; i < items.length; i++) {
      arr.push('- ' + items[i]);
    }
    return arr.join('\n ');
  }

  return data;

};


