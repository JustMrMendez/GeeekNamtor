/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "my", "your", "his", "her", "their"];
let adj = ["great", "big", "small", "tall", "short", "long", "fat"];
let noun = ["jogger", "racoon", "dog", "cat", "mouse", "bird", "fish"];
let ext = [".com", ".net", ".us", ".io"];

function generateDomainName() {
  return (
    "https://" +
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    noun[Math.floor(Math.random() * noun.length)] +
    ext[Math.floor(Math.random() * ext.length)]
  );
}

let domainNames = [];
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < ext.length; l++) {
        domainNames.push("https://" + pronoun[i] + adj[j] + noun[k] + ext[l]);
      }
    }
  }
}

// Js generator function
function* domainLoger() {
  let i = 0;
  while (i < domainNames.length) {
    yield console.table(domainNames.splice(i, i + 10));
    i++;
  }
}

const domainLogerGenerator = domainLoger();

console.log(generateDomainName());
console.table(domainNames.slice(0, 10));
console.log("Total number of domains: " + domainNames.length);

document.querySelector("#domain-name").innerHTML = generateDomainName();

document.querySelector("#generate-link").addEventListener("click", function() {
  document.querySelector("#domain-name").innerHTML = generateDomainName();
  console.log(domainLogerGenerator.next().value);
});
