function generate(){

    const name = document.getElementById("name").value;

    if(name === ""){
        alert("Please enter a name");
        return;
    }

    const prefixes = [
        "king",
        "real",
        "its",
        "the",
        "official",
        "legend"
    ];

    const symbols = [
        "_",
        ".",
        "x",
        "xo",
        "dev",
        "exe"
    ];

    const numbers = [
        "7",
        "77",
        "99",
        "111",
        "444",
        "999"
    ];

    const randomPrefix = prefixes[Math.floor(Math.random()*prefixes.length)];
    const randomSymbol = symbols[Math.floor(Math.random()*symbols.length)];
    const randomNumber = numbers[Math.floor(Math.random()*numbers.length)];

    const username = randomPrefix + randomSymbol + name + randomNumber;

    document.getElementById("result").innerText = username;
}

function copyUsername(){

    const username = document.getElementById("result").innerText;

    if(username === ""){
        alert("Generate a username first!");
        return;
    }

    navigator.clipboard.writeText(username);

    alert("Username copied!");
}
