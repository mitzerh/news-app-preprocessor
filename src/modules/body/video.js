
module.exports = function(info) {

  var data = {};

  data.component = {
    "role": "video",
    "URL": info.feed,
    "stillURL": (info.stillURL) ? ("bundle://" + info.stillURL) : "",
    "caption": info.caption || "",
    "layout": "video"
  };

  data.layouts = {
    "video": {
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


