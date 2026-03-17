function generateUsernames(clear = true){

const name = document.getElementById("nameInput").value.trim().replace(/\s+/g,'');

if(name === ""){
alert("Please enter your name");
return;
}

const prefixes=[
"king","real","its","the","legend","ghost","dark","official"
];

const symbols=[
"_",".","-","x","xo","__","xx","_x"
];

const suffixes=[
"7","77","99","111","444","999","yt","op","ff","pro","404"
];

const resultDiv=document.getElementById("result");

// ✅ Only clear when clicking "Generate"
if(clear){
resultDiv.innerHTML="";
}

for(let i=0;i<10;i++){

const prefix=prefixes[Math.floor(Math.random()*prefixes.length)];
const symbol=symbols[Math.floor(Math.random()*symbols.length)];
const suffix=suffixes[Math.floor(Math.random()*suffixes.length)];

const username=prefix+symbol+name+suffix;

const box=document.createElement("div");
box.className="username";

const text=document.createElement("span");
text.innerText=username;

const copyBtn=document.createElement("button");
copyBtn.innerText="Copy";
copyBtn.className="copyBtn";

copyBtn.onclick=function(){
navigator.clipboard.writeText(username);
copyBtn.innerText="Copied!";
};

box.appendChild(text);
box.appendChild(copyBtn);

resultDiv.appendChild(box);

}

// ✅ Stylish usernames always refresh (not stack)
generateStylish(name);

}



function generateStylish(name){

const styles=[
"『"+name+"』",
"꧁"+name+"꧂",
"★"+name+"★",
"ツ"+name+"ツ",
"乂"+name+"乂",
"✧"+name+"✧",
"⚡"+name+"⚡",
"✿"+name+"✿",
"༒"+name+"༒",
"彡"+name+"彡"
];

const stylishDiv=document.getElementById("stylishResult");

// keep clean (better UX)
stylishDiv.innerHTML="";

styles.forEach(function(username){

const box=document.createElement("div");
box.className="username";

const text=document.createElement("span");
text.innerText=username;

const copyBtn=document.createElement("button");
copyBtn.innerText="Copy";
copyBtn.className="copyBtn";

copyBtn.onclick=function(){
navigator.clipboard.writeText(username);
copyBtn.innerText="Copied!";
};

box.appendChild(text);
box.appendChild(copyBtn);

stylishDiv.appendChild(box);

});

}


function copyAll(){

const usernames=document.querySelectorAll("#result span");

if(usernames.length===0){
alert("Generate usernames first!");
return;
}

let text="";

usernames.forEach(function(item){
text+=item.innerText+"\n";
});

navigator.clipboard.writeText(text);

alert("All usernames copied!");

}
