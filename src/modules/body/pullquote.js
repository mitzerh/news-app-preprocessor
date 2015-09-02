
module.exports = function(info) {

  // note that the opening and closing double quotes
  // are the special ones
  // http://practicaltypography.com/straight-and-curly-quotes.html
  var quoteText = ["“", info.text, "”"].join("");

  var data = {};

  data.component = {
    "role": "section",
    "layout": "section",
    "style": "section",
    "components": [
      {
        "role": "pullquote",
        "text": quoteText,
        "layout": "content",
        "textStyle": "content",
        "animation": {
          "type": "fade_in",
          "initialAplha": 0.5
        },
        "inlineTextStyles": [
          // these are for the double quotes
          {
            "rangeStart": 0,
            "rangeLength": 1,
            "textStyle": {
              "fontSize": 42,
              "tracking": 0.05
            }
          },
          {
            "rangeStart": quoteText.length - 1,
            "rangeLength": 1,
            "textStyle": {
              "fontSize": 42
            }
          }
        ]
      },
      {
        "role": "text",
        "text": "- " + info.attribution,
        "layout": "attribution",
        "textStyle": "attribution"
      }
    ]
  };

  data.layouts = {
    "section": {
      "margin": {
        "bottom": 32
      }
    },
    "content": {
      "margin": {
        "top": 32,
        "bottom": 32
      }
    },
    "attribution": {
      "margin": {
        "top": 0,
        "bottom": 32
      }
    }
  };

  data.styles = {
    "section": {
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
    "content": {
      "textAlignment": "center",
      "lineHeight": 44,
      "fontSize": 32,
      "fontName": "PTSerif-Italic"
    },
    "attribution": {
      "textAlignment": "right",
      "textColor": "#666",
      "fontSize": 14
    }
  };

  return data;

};


