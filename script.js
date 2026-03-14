function generateUsernames(){

const name = document.getElementById("name").value.trim();

if(name === ""){
alert("Please enter your name");
return;
}

const prefixes = [
"king","real","its","the","official","legend","dark","ghost"
];

const symbols = [
"_",".","x","xo","__","xx","_x","_xo"
];

const suffixes = [
"7","77","99","111","444","999","yt","op","pro","ff"
];

const resultDiv = document.getElementById("result");
resultDiv.innerHTML = "";

for(let i=0;i<10;i++){

const prefix = prefixes[Math.floor(Math.random()*prefixes.length)];
const symbol = symbols[Math.floor(Math.random()*symbols.length)];
const suffix = suffixes[Math.floor(Math.random()*suffixes.length)];

const username = prefix + symbol + name + suffix;

const usernameBox = document.createElement("div");
usernameBox.className = "username";

const text = document.createElement("span");
text.innerText = username;

const copyBtn = document.createElement("button");
copyBtn.innerText = "Copy";
copyBtn.className = "copyBtn";

copyBtn.onclick = function(){
navigator.clipboard.writeText(username);
copyBtn.innerText = "Copied!";
};

usernameBox.appendChild(text);
usernameBox.appendChild(copyBtn);

resultDiv.appendChild(usernameBox);

}

}
