function generate(){

let name = document.getElementById("name").value.toLowerCase();

let prefixes = ["king","dark","real","official","legend","mr","pro","alpha","elite","ghost"];

let suffixes = ["gamer","yt","live","boss","king","x","zone","world","hub","army"];

let numbers = ["007","99","123","777","01","x","pro","dev","10","999"];

let output="";

for(let i=0;i<20;i++){

let p = prefixes[Math.floor(Math.random()*prefixes.length)];
let s = suffixes[Math.floor(Math.random()*suffixes.length)];
let n = numbers[Math.floor(Math.random()*numbers.length)];

let username = p+"_"+name+"_"+s+n;

output += "<p>"+username+"</p>";
}

document.getElementById("result").innerHTML = output;

}