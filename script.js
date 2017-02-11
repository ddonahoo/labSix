
var fTemp = 40;
cTemp = (fTemp-32)/1.8;
console.log(cTemp);


var cTemp = 40;
fTemp = (cTemp*1.8)+32;
console.log(fTemp);

function fToC (fahrenheit)
{
var fTemp = fahrenheit;
var cTemp = (fTemp-32)/1.8;
var message = cTemp + " degrees celsius is equal to " + fTemp + " degrees fahrenheit.";
console.log(message);
}
fToC (40);

function cToF (celsius)
{
var cTemp = celsius;
var fTemp = (cTemp*1.8)+32;
var message = fTemp + " degrees fahrenheit is equal to " + cTemp + " degrees celsius.";
console.log(message);
}
cToF (40);
