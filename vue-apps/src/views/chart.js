export function GraphPlotlyChoroplethConvert(data, options){
      var result = [] ;
      data.forEach(function(series, i){var dataset = Object.assign(series, options); result.push(dataset)}); 
      ; return result};
