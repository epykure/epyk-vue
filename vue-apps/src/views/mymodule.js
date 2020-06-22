
import Showdown from 'showdown';
var showdown = Showdown;

export function Text(htmlObj, data, options){
      var content = data;
      if(options.reset){htmlObj.innerHTML = ""}; 
      if(data != ''){ 
        if(options.showdown){var converter = new showdown.Converter(options.showdown); content = converter.makeHtml(data)} 
        if((options.maxlength != undefined) && (data.length > options.maxlength)){
          content = data.slice(0, options.maxlength); 
          if(options.markdown){htmlObj.innerHTML = content +"..."} else {htmlObj.innerHTML = content +"..."}; 
          htmlObj.title = data} 
        else{
          if(options.markdown){htmlObj.innerHTML = content} else {htmlObj.innerHTML = content}}};
      if(typeof options.css !== 'undefined'){for(var k in options.css){htmlObj.style[k] = options.css[k]}};
      };
