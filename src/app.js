/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".cl"];
  let domainName = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j in adj) {
      for (let k in noun) {
        for (let l in domain) {
          domainName.push(`${pronoun[i]}${adj[j]}${noun[k]}${domain[l]}`);
          console.log(domainName);
        }
      }
    }
  }
};
