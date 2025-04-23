# WTWR Server (What to Wear)

This project is the **backend server for the WTWR (What to Wear) web application**, which allows users to share clothing suggestions based on the current weather. The server handles user and clothing item management, provides a RESTful API, and connects to a MongoDB database to store all application data.

---

## 🌐 Functionality

- **User Management**
  - Create new users
  - Retrieve all users
  - Retrieve individual users by ID

- **Clothing Item Management**
  - Add a clothing item
  - Delete a clothing item
  - Like or unlike clothing items
  - Retrieve all clothing items

- **Weather-based Filtering**
  - Filter clothing items by weather condition: hot, warm, or cold
  - Integrate temperature data for tailored results

- **Error Handling**
  - All unknown routes return a 404 JSON error
  - Centralized global error handler returns standardized messages for validation, database, and server errors

---

## ⚙️ Technologies Used

- **Node.js** — JavaScript runtime for building scalable backend services
- **Express.js** — Web application framework for routing and middleware
- **MongoDB** — NoSQL database to persist users and clothing items
- **Mongoose** — ODM for MongoDB to define schemas and run validation
- **ESLint** — Linter for clean, consistent code
- **Nodemon** — Dev tool for automatically restarting the server on file changes
- **Postman** — API testing tool used for manual request verification
- **dotenv** *(optional)* — For loading environment variables securely
- **Celebrate / Joi** *(optional)* — Middleware for request body validation (if implemented)

---

## ✍️ Author

**Pasha Zobov**

[GitHub Repository](https://github.com/Pavkv/se_project_express)

---
