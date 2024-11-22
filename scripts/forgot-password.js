function checkAuthLogin() {
  if (getAuthToken()) {
    window.location.href = "./index.html";
  }
  setHeader();
}

function forgotPasswordSubmit(event) {
  event.preventDefault();
  const data = getFormData(event.target);

  forgotPasswordSubmit(data);
}

async function onSubmit(event) {
  event.preventDefault();
  let email = document.getElementById('email').value;
  await forgotPassword(email);
}

async function forgotPassword(email) {
  const body = {email};
  const link = `${PASSWORD_RESET_URL}`;
  try {
    const response = await postDataWJSON(link, body);
    if (response.ok) {
    forgotPasswordSuccess();
    }
    else {
      showToastMessage(true, ['E-Mail konnte nicht gesendet werden.'])
    }
  } catch(error) {
    console.error('Request-Fehler:', error);
  }
}

function forgotPasswordSuccess() {
  document.getElementById('forgot-password-form').innerHTML = `
          <div class="forgot-password-success-container">
            <h2>E-Mail erfolgreich gesendet!</h2>
            <p>Bitte prüfe deine E-Mails.</p>
            <img src="/assets/img/icons/email.svg" alt="success">
        </div>`
}