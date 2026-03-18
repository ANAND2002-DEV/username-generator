function generateUsernames() {

const name = document.getElementById("nameInput").value.trim().replace(/\s+/g,'');

if (name === "") {
alert("Please enter your name");
return;
}

const resultDiv = document.getElementById("result");

/* ✅ CLEAR (main generate) */
resultDiv.innerHTML = "";

/* ✅ Generate fresh usernames */
generateList(name);

/* ✅ Refresh stylish */
generateStylish(name);

}



function generateMoreUsernames() {

const name = document.getElementById("nameInput").value.trim().replace(/\s+/g,'');

if (name === "") {
alert("Please enter your name");
return;
}

/* ✅ Only add more */
generateList(name);

}



/* 🔥 COMMON GENERATOR */
function generateList(name) {

const prefixes = [
"king","real","its","the","legend","ghost","dark","official"
];

const symbols = [
"_",".","-","x","xo","__","xx","_x"
];

const suffixes = [
"7","77","99","111","444","999","yt","op","ff","pro","404"
];

const resultDiv = document.getElementById("result");

/* ✅ Prevent duplicates */
const existing = new Set(
[...document.querySelectorAll("#result span")].map(el => el.innerText)
);

let count = 0;

while (count < 10) {

const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
const symbol = symbols[Math.floor(Math.random() * symbols.length)];
const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

const username = prefix + symbol + name + suffix;

if (!existing.has(username)) {
existing.add(username);
count++;

const box = document.createElement("div");
box.className = "username";

const text = document.createElement("span");
text.innerText = username;

const copyBtn = document.createElement("button");
copyBtn.innerText = "Copy";
copyBtn.className = "copyBtn";

copyBtn.onclick = function () {
navigator.clipboard.writeText(username);
copyBtn.innerText = "Copied!";
setTimeout(() => copyBtn.innerText = "Copy", 1500);
};

box.appendChild(text);
box.appendChild(copyBtn);

resultDiv.appendChild(box);
}

}

}



function generateStylish(name) {

let styles = [
"『"+name+"』",
"꧁"+name+"꧂",
"★"+name+"★",
"ツ"+name+"ツ",
"乂"+name+"乂",
"✧"+name+"✧",
"⚡"+name+"⚡",
"✿"+name+"✿",
"༒"+name+"༒",
"彡"+name+"彡",
"×"+name+"×",
"•"+name+"•",
"°"+name+"°",
"♛"+name+"♛"
];

const stylishDiv = document.getElementById("stylishResult");

/* ✅ Clear */
stylishDiv.innerHTML = "";

/* 🔥 Shuffle */
styles.sort(() => Math.random() - 0.5);

/* 🔥 Pick 10 */
const selected = styles.slice(0, 10);

selected.forEach(function (username) {

const box = document.createElement("div");
box.className = "username";

const text = document.createElement("span");
text.innerText = username;

const copyBtn = document.createElement("button");
copyBtn.innerText = "Copy";
copyBtn.className = "copyBtn";

copyBtn.onclick = function () {
navigator.clipboard.writeText(username);
copyBtn.innerText = "Copied!";
setTimeout(() => copyBtn.innerText = "Copy", 1500);
};

box.appendChild(text);
box.appendChild(copyBtn);

stylishDiv.appendChild(box);

});

}



function copyAll() {

const usernames = document.querySelectorAll("#result span");

if (usernames.length === 0) {
alert("Generate usernames first!");
return;
}

let text = "";

usernames.forEach(function (item) {
text += item.innerText + "\n";
});

navigator.clipboard.writeText(text);

alert("All usernames copied!");

}
