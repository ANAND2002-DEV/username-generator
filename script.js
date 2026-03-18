document.getElementById("generateBtn").addEventListener("click", generateUsernames);
document.getElementById("moreBtn").addEventListener("click", generateMoreUsernames);
document.getElementById("copyBtn").addEventListener("click", copyAll);


function getName() {
  const name = document.getElementById("nameInput").value.trim().replace(/\s+/g,'');

  if (name === "") {
    alert("Please enter your name");
    return null;
  }

  return name;
}


/* 🟢 GENERATE (first time) */
function generateUsernames() {
  const name = getName();
  if (!name) return;

  generateNewSet(name);
}


/* 🔵 GENERATE MORE (replace with new set) */
function generateMoreUsernames() {
  const name = getName();
  if (!name) return;

  generateNewSet(name);
}


/* 🔥 COMMON FUNCTION (always replaces) */
function generateNewSet(name) {

  const prefixes = ["king","real","its","the","legend","ghost","dark","official"];
  const symbols = ["_",".","-","x","xo","__","xx","_x"];
  const suffixes = ["7","77","99","111","444","999","yt","op","ff","pro","404"];

  const resultDiv = document.getElementById("result");

  /* ✅ ALWAYS CLEAR (this fixes your issue) */
  resultDiv.innerHTML = "";

  const used = new Set();

  while (used.size < 10) {

    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    const username = prefix + symbol + name + suffix;

    if (!used.has(username)) {
      used.add(username);

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

  /* ✅ Always refresh stylish */
  generateStylish(name);
}


function generateStylish(name) {

  let styles = [
    `『${name}』`,`꧁${name}꧂`,`★${name}★`,`ツ${name}ツ`,`乂${name}乂`,
    `✧${name}✧`,`⚡${name}⚡`,`✿${name}✿`,`༒${name}༒`,`彡${name}彡`,
    `×${name}×`,`•${name}•`,`°${name}°`,`♛${name}♛`
  ];

  const stylishDiv = document.getElementById("stylishResult");
  stylishDiv.innerHTML = "";

  styles.sort(() => Math.random() - 0.5);

  styles.slice(0,10).forEach(username => {

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
  usernames.forEach(item => text += item.innerText + "\n");

  navigator.clipboard.writeText(text);
  alert("All usernames copied!");
}
