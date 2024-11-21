function checkAuthLogin() {
    if (getAuthToken()) {
        window.location.href = "./index.html";
    }
    setHeader()
    activateSuccess()
}

function logInSubmit(event) {
    event.preventDefault();
    const data = getFormData(event.target);

    logIn(data);
}

function guestLogin(type) {
    logIn(GUEST_LOGINS[type])
}

function activateSuccess() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const msg = urlParams.get('msg');

    if (msg) {
        showToastMessage(false, ['Ihr Account wurde aktiviert!']);
    }
}