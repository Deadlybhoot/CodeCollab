
# CodeCollab

# WHAT is CodeCollab

An innovative platform designed to empower real-time collaboration on coding projects. This application integrates advanced features like AI-powered assistance, real-time messaging, and seamless code execution directly in the browser. Whether you’re working on small projects or managing a team, CodeCollab makes collaboration seamless, efficient, and dynamic.







## Project Overview

Project Overview
CodeCollab combines cutting-edge technology to provide a robust environment for collaborative coding projects. Key functionalities include:


1. User Authentication
- Secure user registration and login using JSON Web Tokens (JWT) for authentication.
- Ensures session management with token-based security.
2. Real-Time Collaboration
- Enables multiple users to work on a single project simultaneously.
- Supports real-time messaging using Socket.IO, allowing instant communication within project rooms.
3. Project Management
- Users can create, manage, and collaborate on multiple projects.
- Projects have unique identifiers, allowing selective access to team members.
4. AI Integration
- Powered by Gemini AI for automatic code generation and in-depth technical explanations.
- AI capabilities are triggered using specific keywords like @ai in messages.
- Supports direct code execution in the browser via WebContainers, eliminating the need for local setups.
5. Frontend
- Developed using React, featuring:
- User-friendly interfaces for authentication, project management, and messaging.
- React Router for seamless navigation.
- Axios for efficient frontend-backend communication.
6. Backend
- Built with Node.js and Express, offering:
- A secure and scalable architecture.
- MongoDB for robust data storage.
- Real-time communication via Socket.IO.
7. In-Browser Code Execution
- Execute code directly in the browser via WebContainers, removing the need for complex setups.

## Tech Stack Details

### Backend

- **Node.js**: Used for server-side logic and APIs.
- **Express**: Simplifies HTTP request handling and routing.
- **Socket.IO**: Enables real-time, bidirectional communication.
- **MongoDB**: Serves as the database for secure and efficient data management.
- **JWT (JSON Web Tokens)**: Provides user authentication and session management.

### Frontend

- **React**: Creates a dynamic and user-friendly interface.
- **Axios**: Manages efficient HTTP requests between the frontend and backend.
- **React Router**: Handles seamless in-app navigation.




## platform Visuals 🎨

- **Login Page:**
![Screenshot (712)](https://github.com/user-attachments/assets/531c09e6-6d7c-46ad-a79d-851e679a1b1b)

- **Home Page:**
![Screenshot (713)](https://github.com/user-attachments/assets/4de78ee9-8a14-4f87-a0d0-8ae9c30097b8)

- **Create new Project:**
![Screenshot (714)](https://github.com/user-attachments/assets/232a004c-58a3-4db3-9f47-3f87bbb59f1b)


- **Coding + Collaboration Environment:**
![Screenshot (715)](https://github.com/user-attachments/assets/c7b40278-e77f-4faa-a5db-bc1ee5b99b55)


- **Node Packages Installed:**
![Screenshot (716)](https://github.com/user-attachments/assets/a8ec794e-02ba-4d4a-bc72-3cccff11a4ba)


- **Server is Running on Port 3000:**
![Screenshot (717)](https://github.com/user-attachments/assets/f16ea721-9fff-4dff-8737-bb6945b968cf)



![Screenshot (719)](https://github.com/user-attachments/assets/1277e77c-8b7b-4c7a-933c-39e094d79ee1)


- **Add new User:**
![Screenshot (720)](https://github.com/user-attachments/assets/e8ff7173-1bda-4d24-b451-e5d61e3014b9)

- **Collaboration Environment:**
![Screenshot (721)](https://github.com/user-attachments/assets/5afeb0e8-54f0-4bba-bf40-d42a75c5a835)





## Installation

Backend

```bash
  cd backend && npm install
  npm start
```

frontend

```bash
  cd frontend && npm install
  npm run dev
```

## Setup Environment variable


Create a new file named `.env` in the the backend folder and add the following content:

```env
# Server configuration
PORT=8000
HOST=localhost

VITE_API_URL=http://localhost:3000
JWT_SECRET=
GOOGLE_AI_KEY=
REDIS_HOST=
REDIS_PORT=18097
REDIS_PASSWORD=
MONGODB_URI=mongodb://127.0.0.1:27017/chat-app

# Other configurations
NODE_ENV=development
```


Create a new file named `.env` in the the frontend folder and add the following content:

```env
VITE_API_URL=http://localhost:8000 
VITE_ENV=development
# REACT_APP_DEBUG=true
```

Replace the placeholder values with your actual respective account credentials.



## Follow Me Thank You! 😊

<table>
  <tr>
    <th></th>
    <th>Social Media</th>
    <th>Username</th>
    <th>Link</th>
  </tr>
  <tr>
    <td><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" width="20" /></td>
    <td>Email</td>
    <td><code>satavakshay2001@gmail.com</code></td>
    <td><a href="mailto:satavakshay2001@gmail.com" target="_blank">Email</a></td>
  </tr>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" width="20" /></td>
    <td>LinkedIn</td>
    <td><code>Akshay Satav</code></td>
    <td><a href="https://www.linkedin.com/in/akshay-satav-0610741a9/" target="_blank">LinkedIn</a></td>
  </tr>

</table>

_Feel free to reach out if you have questions or just want to chat about web adventures!_
    
