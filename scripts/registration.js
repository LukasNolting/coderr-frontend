function checkAuth() {
    if (getAuthToken()) {
        window.location.href = "./index.html";
    }
}

function registerSubmit(event) {
    event.preventDefault();
    const data = getFormData(event.target);

    registration(data)
}

function successRegistration() {
    document.getElementById('registration-container').innerHTML = `  
        <div class="signup-success-container">
            <h1>Registrierung erfolgreich</h1>
            <p>Bitte prüfe deine E-Mails und aktiviere dein Konto.</p>
            <img src="/assets/img/icons/email.svg" alt="success">
        </div>`
}