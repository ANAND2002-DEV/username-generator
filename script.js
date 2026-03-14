function generateUsernames(){

const name = document.getElementById("nameInput").value.trim();

if(name === ""){
alert("Please enter your name");
return;
}

const prefixes = [
"king","real","its","the","legend","ghost","dark","official"
];

const symbols = [
"_",".","-","__","..","--",
"x","xx","xo","_x",
"yt","op","ff","pro",
"404","777","999",
"exe","dev","bot",
"ツ","メ","乂"
];

const suffixes = [
"7","77","99","111","444","999","yt","op","ff","pro"
];

const resultDiv = document.getElementById("result");
resultDiv.innerHTML = "";

for(let i=0;i<10;i++){

const prefix = prefixes[Math.floor(Math.random()*prefixes.length)];
const symbol = symbols[Math.floor(Math.random()*symbols.length)];
const suffix = suffixes[Math.floor(Math.random()*suffixes.length)];

const username = prefix + symbol + name + suffix;

const box = document.createElement("div");
box.className = "username";

const text = document.createElement("span");
text.innerText = username;

const copyBtn = document.createElement("button");
copyBtn.innerText = "Copy";
copyBtn.className = "copyBtn";

copyBtn.onclick = function(){
navigator.clipboard.writeText(username);
copyBtn.innerText = "Copied!";
};

box.appendChild(text);
box.appendChild(copyBtn);

resultDiv.appendChild(box);

}

}
function generateStylish(name){

const styles = [

"𝓐𝓷𝓪𝓷𝓭",
"Ａｎａｎｄ",
"『"+name+"』",
"꧁"+name+"꧂",
"★"+name+"★",
"么"+name+"么",
"✧"+name+"✧",
"⚡"+name+"⚡",
"ツ"+name+"ツ",
"乂"+name+"乂"

];

const stylishDiv = document.getElementById("stylishResult");

stylishDiv.innerHTML = "";

styles.forEach(function(style){

const username = style.replace(/Anand/g, name);

const box = document.createElement("div");
box.className = "username";

const text = document.createElement("span");
text.innerText = username;

const copyBtn = document.createElement("button");
copyBtn.innerText = "Copy";
copyBtn.className = "copyBtn";

copyBtn.onclick = function(){
navigator.clipboard.writeText(username);
copyBtn.innerText = "Copied!";
};

box.appendChild(text);
box.appendChild(copyBtn);

stylishDiv.appendChild(box);

});

}
