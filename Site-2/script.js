
function increaseFontSize () {
    
    let currentSize = parseInt(window.getComputedStyle(document.body).fontSize);

    document.body.style.fontSize = (currentSize * 1.2) + 'px';
}

function changeColors () {
    
    document.body.style.backgroundColor = "#333";
    document.body.style.color           = "#fff";
}

function submitForm () {
    var name    = document.getElementById("name").value;
    var email   = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    console.log("Nome: "     + name);    
    console.log("Email: "    + email);
    console.log("Mensagme: " + message);
}
