function generate(){

let name = document.getElementById("name").value.toLowerCase();

let prefixes = ["king","dark","real","official","legend","mr","pro","alpha","elite","ghost"];
let suffixes = ["gamer","yt","live","boss","zone","world","hub","army"];
let symbols = ["★","✿","ツ","亗","彡","✧","✦","✪","☯","⚡"];
let numbers = ["007","99","123","777","01","10","999"];

let output="";

for(let i=0;i<25;i++){

let p = prefixes[Math.floor(Math.random()*prefixes.length)];
let s = suffixes[Math.floor(Math.random()*suffixes.length)];
let sym = symbols[Math.floor(Math.random()*symbols.length)];
let num = numbers[Math.floor(Math.random()*numbers.length)];

let patterns = [
sym + name + sym,
p + "_" + name,
name + "_" + s,
sym + name + num,
p + name + num,
name + sym + s,
sym + p + "_" + name + sym,
name + "_" + num,
p + "_" + name + "_" + s,
sym + name + "_" + s
];

let username = patterns[Math.floor(Math.random()*patterns.length)];

output += `
<div class="username-box">
<span>${username}</span>
<button onclick="copyText('${username}')">Copy</button>
</div>
`;

}

document.getElementById("result").innerHTML = output;

}

function copyText(text){

navigator.clipboard.writeText(text);
alert("Copied: " + text);

}
