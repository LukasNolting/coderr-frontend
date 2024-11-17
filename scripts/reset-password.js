async function onSubmit(event) {
    event.preventDefault();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');
    console.log("Token:", token);
    password = document.getElementById('password').value;
    repeat_password = document.getElementById('repeated_password').value;

    if (password !== repeat_password) {
        showToastMessage(true, ['Passwörter stimmen nicht überein.']);
        password.innerHTML = '';
        repeat_password.innerHTML = '';
    }
    else {
        let response = await resetPassword(token, password);

        if (response.status === 200) {
            showToastMessage(false, ['Dein Passwort wurde erfolgreich geändert.']);
            password.innerHTML = '';
            repeat_password.innerHTML = '';
            setTimeout(() => {
                window.location.href = './login.html';
            }, 2000);
        } else {
            showToastMessage(true, ['Ein Fehler ist aufgetreten.']);
        }
    }
}

async function resetPassword(token, password) {
    const body = { password };
    const link = `password-reset/${token}/`;
    try {
        const response = await postDataWJSON(link, body);
        return response;
    } catch (error) {
        console.error('Request-Error:', error);
        throw error;
    }
}