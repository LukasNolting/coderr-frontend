// async function onSubmit(event) {
//     event.preventDefault();
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const token = urlParams.get('token');
//     console.log("Token:", token);
//     password = document.getElementById('password').value;
//     repeat_password = document.getElementById('repeat_password').value;

//     if (password !== repeat_password) {
//         showToastMessage(true, ['Passwörter stimmen nicht überein.']);
//     }
//     else {
//         try {
//             await resetPassword(token, password);

//             if (response.status === 200) {
//                 this.app.showDialog('Password reset successfully!');
//                 this.showResetPasswordForm = false;
//                 setTimeout(() => {
//                     this.router.navigate(['/login']);
//                 }, 3000);
//             } else {
//                 this.app.showDialog('Error resetting password.');
//             }
//         } catch (error) {
//             console.warn('Error setting password', error);
//             this.app.showDialog('An unexpected error occurred.');
//         }
//     }


    
//     }

// function checkTokenValidity(token) {
//     this.httpClientWithoutInterceptor
//         .get(`${environment.baseUrl}/videoflix/password-reset/${token}`)
//         .subscribe({
//             error: (error) => {
//                 if (
//                     error.error === 'Token expired' ||
//                     error.error === 'Invalid token'
//                 ) {
//                     console.error(
//                         'The Token has expired or is invalid. Please try again.'
//                     );
//                 }
//             },
//         });
// }

//   async function resetPassword(token, password) {
//     const body = { password };
//     const link = `${environment.baseUrl}/videoflix/password-reset/${token}/`;
//     try {
//         const response = await firstValueFrom(
//             this.httpClientWithoutInterceptor.post < any > (link, body, {
//                 headers: { 'Content-Type': 'application/json' },
//                 observe: 'response',
//             })
//         );
//         return response;
//     } catch(error) {
//         console.error('Request-Error:', error);
//         throw error;
//     }
// }