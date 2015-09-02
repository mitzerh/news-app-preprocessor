
module.exports = function(info) {

  var data = {};

  data.component = {
    "role": "container",
    "layout": "container",
    "components": [
      {
        "role": "video",
        "URL": info.feed,
        "stillURL": (info.stillURL) ? ("bundle://" + info.stillURL) : "",
        "caption": info.caption || "",
        "layout": "video"
      }
    ],
    "behavior": {
      "type": "parallax",
      "factor": 1.2
    }
  };

  data.layouts = {
    "container": {
      "columnStart": 0,
      "columnSpan": 7,
      "ignoreDocumentMargin": true,
      "margin": {
        "top": 0,
        "bottom": 32
      }
    },
    "video": {
      "columnStart": 0,
      "columnSpan": 7,
      "ignoreDocumentMargin": true,
      "minimumHeight": "42vh",
      "margin": {
        "top": 0,
        "bottom": 0
      }
    }
  };

  data.styles = {

  };

  data.textStyles = {
    
  };

  return data;

};


