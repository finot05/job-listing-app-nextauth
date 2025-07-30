# Job Listing App (Task 8)

This application demonstrates a complete user authentication system built with Next.js and NextAuth.js, integrating with provided REST API endpoints for signing up, logging in, verifying email, and secure token management.

---

## Features

- User Signup with validation
- User Signin with error handling
- Email Verification using OTP
- Error messages for invalid credentials or incomplete input
- Clean and accessible UI (based on provided Figma design)
- Access token securely handled via session


## 📸Screenshots
Landing Page (Job Listing Page)
Displays job list and a logout button after user logs in
<img width="700" alt="Screenshot (1448)" src="https://github.com/user-attachments/assets/667f0b3f-4b8f-46e2-bbea-d32c877ff8b8" />

Sign In Page
Shows error messages on invalid email/password
<img width="700" alt="image" src="https://github.com/user-attachments/assets/e0178dbe-0edd-4911-9a12-98307bd99e17" />
<img width="700" alt="image" src="https://github.com/user-attachments/assets/3b628915-6aa0-4523-b423-49419936ed09" />

Signup Page
Includes client-side validation
Shows required field alerts
<img width="700" alt="image" src="https://github.com/user-attachments/assets/5804fca2-f4b5-45fc-8813-54f46ab8c8cc" />
<img width="700" alt="image" src="https://github.com/user-attachments/assets/1301845f-0c3f-4bbe-b8a8-66cc17d66850" /> <img width="700" alt="image" src="https://github.com/user-attachments/assets/e1f5e068-1c0c-4083-a8c5-312b65bf4d39" />

---
Verify Email Page
Submits OTP and confirms success
<img width="700" alt="image" src="https://github.com/user-attachments/assets/b2b13a40-9c9d-4917-bd75-8b88dba034a2" />

## Technologies Used
Next.js
NextAuth.js
TypeScript
REST API Integration (using fetch)
Tailwind CSS
Google OAuth

## Installation and Running Locally
1. Clone the Repository
```bash
git clone https://github.com/finot05/job-listing-app-nextauth.git
```
2. Navigate to the Project
```bash
cd job-listing-app-nextauth
```
3. Install Dependencies
```bash
npm install
```
4. Setup Environment Variables
Create a .env.local file and fill in:
```bash
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```
5. Run the Development Server
```bash
npm run dev
```

## API Endpoints Used
Base URL: https://akil-backend.onrender.com/

Endpoint	    Method	      Purpose
/signup	       POST	       Register a new user
/verify-email	 POST	       Verify email with OTP
/login	       POST	       Sign in with email + password

