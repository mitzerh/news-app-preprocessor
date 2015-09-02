
module.exports = function(info) {
  
  var data = {};

  data.component = {
    "role": "gallery",
    "items": getItems(info.items),
    "layout": "layout"
  };

  data.layouts = {
    "layout": {
        "columnStart": 0,
        "columnSpan": 7,
        "margin": {
          "top": 10,
          "bottom": 32
        }
      }
  };

  data.styles = {

  };

  data.textStyles = {
    
  };

  function getItems(items) {
    var arr = [];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
          
        arr.push({
            "URL": "bundle://" + item.url,
            "caption": [item.caption, (item.credit) ? (' (' + item.credit + ')') : ''].join('')
        });
    }
    return arr;
  }

  return data;

};


