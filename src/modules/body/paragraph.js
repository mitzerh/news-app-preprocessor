
module.exports = function(info) {
  
  var data = {};

  data.component = {
    "role": "body",
    "layout": "content",
    "text": info.text,
    "format": "markdown"
  };

  data.layouts = {
    "content": {
      "margin": {
        "top": 0,
        "bottom": 32
      }
    }
  };

  data.styles = {

  };

  data.textStyles = {
    
  };

  return data;

};


