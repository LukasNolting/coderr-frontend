Coderr Frontend

The Coderr frontend is a user interface for the platform, designed to facilitate user interaction with features such as login, password reset, profile management, and more. This project is built using modern web development frameworks and adheres to a clean and responsive design philosophy.

Features

- User Authentication: Login and registration functionality.
- Password Reset:
  - Request password reset via email.
  - Reset password using a secure token.
- User Profile Management:
  - View and edit profiles.
  - Support for business and customer profiles.
- Business Features:
  - View business profiles.
  - List offers and interact with business users.

Installation

1. Clone the repository:
   git clone git@github.com:LukasNolting/coderr-frontend.git
   cd coderr-frontend

2. Install dependencies:
   npm install

3. Start the development server:
   npm start

Project Structure

- HTML Pages:
  - login.html: User login page.
  - request-password.html: Password reset request page.
  - reset-password.html: Password reset page.

- JavaScript Files:
  - scripts/request-password.js: Handles logic for requesting a password reset.
  - scripts/reset-password.js: Handles logic for resetting the password.

Environment Variables

Ensure that the frontend communicates with the backend by setting the correct API URL. Add a .env file with the following content:

REACT_APP_API_URL=http://localhost:8000

Deployment

Build the production-ready application:
npm run build

Host the output files on any static web server.

Contribution

1. Fork the repository.
2. Create a new feature branch:
   git checkout -b feature-name
3. Commit your changes:
   git commit -m "Add feature description"
4. Push to the branch:
   git push origin feature-name
5. Open a pull request.

License

This project is licensed under the MIT License.
