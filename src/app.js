/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// domain name generator
let pronoun = ["the", "our", "my", "your", "his", "her", "their"];
let adj = ["great", "big", "small", "tall", "short", "long", "fat"];
let noun = ["jogger", "racoon", "dog", "cat", "mouse", "bird", "fish"];
let ext = [".com", ".net", ".us", ".io"];

// function to generate a random domain name
function generateDomainName() {
  return (
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    noun[Math.floor(Math.random() * noun.length)] +
    ext[Math.floor(Math.random() * ext.length)]
  );
}

document.querySelector("#domain-name").innerHTML = generateDomainName();
window.onload = function() {
  console.log(generateDomainName());
};
