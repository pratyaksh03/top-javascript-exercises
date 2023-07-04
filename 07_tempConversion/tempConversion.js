const convertToCelsius = function(f) {
  var c = (f-32)*(5/9);
  var roundedC = Math.round(c * 10) / 10;
  return roundedC;
};

const convertToFahrenheit = function(c) {
  var f = (c*9/5)+32;
  var roundedF = Math.round(f * 10) / 10;
  return roundedF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
