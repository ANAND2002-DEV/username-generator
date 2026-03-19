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


/* 🟢 GENERATE */
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


/* 🔥 MAIN GENERATOR */
function generateNewSet(name) {

  const prefixes = ["king","real","its","the","legend","ghost","dark","official"];
  const symbols = ["_",".","-","x","xo","__","xx","_x"];
  const suffixes = ["7","77","99","111","444","999","yt","op","ff","pro","404"];

  const resultDiv = document.getElementById("result");

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

  /* ✅ Refresh sections */
  generateStylish(name);
  generateFancyFonts(name); /* 🔥 NEW FEATURE */
}


/* ✨ STYLISH SYMBOL USERNAMES */
function generateStylish(name) {

  let styles = [
    `『${name}』`,`꧁${name}꧂`,`★${name}★`,`ツ${name}ツ`,`乂${name}乂`,
    `✧${name}✧`,`⚡${name}⚡`,`✿${name}✿`,`༒${name}༒`,`彡${name}彡`,
    `×${name}×`,`•${name}•`,`°${name}°`,`♛${name}♛`,
    `꧁༺${name}༻꧂`,`★彡${name}彡★`,`♛${name}ツ`,`⚡彡${name}彡⚡`
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


/* 💎 FANCY FONT USERNAMES (NEW 🔥) */
function generateFancyFonts(name) {

  const mapStyle = (alphabet) => 
    name.split('').map(c => {
      const i = "abcdefghijklmnopqrstuvwxyz".indexOf(c.toLowerCase());
      return i !== -1 ? alphabet[i] : c;
    }).join('');

  const fancyStyles = [
    mapStyle("𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃"),
    mapStyle("𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳"),
    mapStyle("𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫"),
    mapStyle("𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷"),
    mapStyle("𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣")
  ];

  const symbols = ["✦","★","⚡","✿","༒","♛","❖","✧"];

  const fancyDiv = document.getElementById("fancyResult");
  if (!fancyDiv) return; // safety

  fancyDiv.innerHTML = "";

  fancyStyles.forEach(text => {

    const sym = symbols[Math.floor(Math.random()*symbols.length)];
    const username = sym + text + sym;

    const box = document.createElement("div");
    box.className = "username";

    const span = document.createElement("span");
    span.innerText = username;

    const btn = document.createElement("button");
    btn.innerText = "Copy";
    btn.className = "copyBtn";

    btn.onclick = function () {
      navigator.clipboard.writeText(username);
      btn.innerText = "Copied!";
      setTimeout(() => btn.innerText = "Copy", 1500);
    };

    box.appendChild(span);
    box.appendChild(btn);

    fancyDiv.appendChild(box);
  });
}


/* 📋 COPY ALL */
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
