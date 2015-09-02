module.exports = function(info) {

  var data = {};

  data.component = {
    "role": "photo",
    "layout": "content",
    "URL": "bundle://" + info.image,
    "caption": info.caption || ""
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


