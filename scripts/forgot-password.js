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
