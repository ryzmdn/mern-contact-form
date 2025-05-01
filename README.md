# MERN Email Contact Form

**MERN Email Contact Form** is a full-stack web application built with the **MERN Stack** (MongoDB, Express, React, Node.js). It provides a functional and secure contact form that allows users to send messages via email using **Nodemailer**. The form collects essential details such as first name, last name, email, phone number, subject, and message, with a mandatory privacy policy agreement toggle.

## Form Image

![localhost_5173_](https://github.com/user-attachments/assets/d199d947-90fd-4321-a0e6-6ca06f85ff25)

## Features

- **Email Contact Form** with input validation
- **Fields:** First Name, Last Name, Email, Phone Number, Subject and Message
- **Privacy Policy Toggle** (must be accepted before submitting)
- **Nodemailer Integration** for sending messages to a designated email
- **Frontend & Backend Separation** (MERN stack)
- **Environment-Based Configuration**
- **Responsive Design** using React Bootstrap

## Project Structure

```plaintext
contact-form-mern/
│
├── client/                
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── App.jsx
│       └── main.jsx
│
├── models/
├── routes/
├── utils/
│
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## Installation

```bash
# Clone the repository
git clone https://github.com/ryzmdn/mern-contact-form.git

# Navigate into the project directory
cd mern-contact-form

# Install server dependencies
npm install

# Change directory to client folder
cd client

# Install client dependencies
npm install

# Start the development client
npm run dev

# Return to the root directory
cd ..

# Copy the example environment file
cp .env.example .env

# Fill in your environment variables (see Configuration section)

# Start the development server
node server.js
# or
nodemon server.js
```

## Configuration

Create a `.env` file in the root directory and provide the following variables:

```env
PORT=4000
MONGODB_URI=

USER_EMAIL=
USER_PASSWORD=
```

## Usage

1. Run `npm run dev` to start both backend and frontend concurrently (if configured).
2. Open the browser at `http://localhost:5173`.
3. Fill in the contact form fields and accept the privacy policy.
4. Click **Submit** button.
5. A confirmation will appear and the message will be sent to the configured email address.

## Technologies Used

- **MongoDB** - NoSQL database for storing messages (optional, if storing)
- **Express.js** - Backend API framework
- **React.js** - Frontend UI framework
- **React Bootstrap** - Component based CSS framework
- **Node.js** - JavaScript runtime
- **Nodemailer** - Email sending utility
- **dotenv** - Environment configuration
- **Axios** - HTTP client for frontend-backend communication
- **Yup** - JavaScript schema builder used for value parsing and validation
- **Formik** - React library for form management, handling tasks like form state, validation, and submission

## API Endpoints Overview

| Endpoint       | Method | Description          |
|----------------|--------|----------------------|
| `/api/contact` | POST   | Submit contact form  |

## License

This project is licensed under the [MIT License](./LICENSE). You are free to use, modify, and distribute it with proper attribution.
