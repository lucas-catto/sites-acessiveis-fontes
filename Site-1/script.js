
let darkMode = false;

function toggleTheme () {
    
    darkMode = !darkMode;

    if (darkMode) {
        document.body.style.backgroundColor = "#333";
        document.body.style.color           = "#fff";
    }
    else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color           = "#333";
    }
}

function increaseFontSize () {
    
    let currentSize = parseInt(window.getComputedStyle(document.body).fontSize);

    document.body.style.fontSize = (currentSize * 1.2) + 'px';
}

function submitForm () {
    var name    = document.getElementById("name").value;
    var email   = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    console.log("Nome: "     + name);    
    console.log("Email: "    + email);
    console.log("Mensagme: " + message);
}
