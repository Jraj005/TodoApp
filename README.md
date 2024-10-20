
# TodoApp (MERN Stack)

A full-stack  Todo Application  built with  MongoDB, Express.js, React, and Node.js . This project allows users to manage their tasks with basic CRUD operations, using a backend API and a frontend interface.

 # 📂 Folder Structure
```
/todo-app
├── /frontend     # React Frontend
│   ├── /public
│   ├── /src
│   │   └── /services/api.js  # API integration with backend
│   └── package.json
│
├── /backend      # Node.js Backend
│   ├── /models
│   ├── /routes
│   ├── /controllers
│   ├── .env
│   └── package.json
└── README.md
```

---

 # 🚀 Technologies Used
# Frontend:
-  React  – For building the user interface.
-  CSS  – For styling.
-  Axios  – To interact with the backend API.

# Backend:
-  Node.js  – Runtime environment.
-  Express.js  – Web framework for building APIs.
-  MongoDB  – NoSQL database for storing tasks.
-  Mongoose  – ORM for MongoDB.
-  dotenv  – To manage environment variables.
-  CORS  – Middleware for enabling cross-origin requests.

---

 # 🛠 How to Run Locally

# Prerequisites:
-  Node.js  and  npm  installed
-  MongoDB  running locally or on the cloud

# Backend Setup:
1. Clone the repository:
   ```bash
   git clone https://github.com/Jraj005/TodoApp.git
   cd TodoApp/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the backend folder:
     ```
     MONGO_URI=<Your MongoDB Connection String>
     PORT=4000
     ```
   
4. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run at: `http://localhost:4000`

# Frontend Setup:
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update  API Endpoint  in `src/services/api.js`:
   ```javascript
   const API_URL = 'http://localhost:4000'; // Local backend URL
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```
   The frontend will be available at: `http://localhost:3000`

---

 # 🌐 Deployment
-  Backend : [Render](https://todobackend-ygn9.onrender.com)
-  Frontend : [Render / Netlify](#) (Add the actual deployment link here)

---

 # 🛑 Challenges and Decisions
1.  State Management:  Opted not to use Redux for simplicity, as the application has minimal state.
2.  Deployment on Render:  Encountered issues deploying the backend initially due to missing `package.json`. Resolved by correctly pointing to the backend directory and adding necessary build commands.
3.  API Integration:  Modified the frontend to interact with the deployed backend using `https://todobackend-ygn9.onrender.com`.

---

 # 📜 License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

 # 📝 Author
Developed by  Jayrajsinh Chauhan . 

Feel free to contribute or report issues at [GitHub](https://github.com/Jraj005/TodoApp).

---

This  README.md  provides a detailed overview, making it easy for others to understand your project and run it locally. Let me know if any more tweaks are needed!
