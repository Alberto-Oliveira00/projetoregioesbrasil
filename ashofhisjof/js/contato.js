
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if(name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    return true;
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    if(validateForm()) {
        console.log("Formulário válido e pronto para ser enviado.");
        document.getElementById('contactForm').reset();
    }
});
