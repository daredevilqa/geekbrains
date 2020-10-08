function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  script.async = false;
  document.body.append(script);
}

function showNameInDOM(name) {
  let div = document.createElement("div");
  div.style.fontSize = "20";
  div.style.fontWeight = "bold";
  div.innerText = `So, the name was: ${name}`;
  document.body.append(div);
}

function calculateFahrenheit(tC) {
  return (tC * 9) / 5 + 32;
}

let tC;
let tF;
let admin;
let name;
const num = 1000;
const str = "108";

tC = 0;
name = "Василий";
admin = name;

alert(
  `'0' degrees in Celcius would be '${calculateFahrenheit(
    tC
  )}' degrees in Fahrenheit`
);
showNameInDOM(admin);
console.log(
  `If you were to try appending a number (e.g. ${num}) to a string (e.g. '${str}') in JS, the result would be:\n
  ${num + str} (type: ${typeof (num + str)})`
);

// long.js запускается первым, так как async=false
loadScript("https://javascript.info/article/script-async-defer/long.js");
loadScript("https://javascript.info/article/script-async-defer/small.js");
