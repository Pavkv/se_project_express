# WTWR Back-End

This is the back-end component of the **WTWR (What To Wear)** web application. It provides a RESTful API with user authentication and CRUD operations for managing user profiles and clothing items based on weather conditions.

<img width="1470" alt="image" src="https://github.com/user-attachments/assets/5c1c659e-d34e-4f75-bea5-f765c0c7b7c8" />

---

## Link for the front-end of a project

https://github.com/Pavkv/se_project_react

---

## Web Link
https://whatowearexpress.twilightparadox.com

---

## 🌐 Project Features

- User registration and login with hashed passwords (bcrypt)
- JWT-based authentication and protected routes
- Full CRUD for clothing items
- Input validation using Celebrate and Joi
- Centralized error handling with meaningful status codes
- MongoDB with Mongoose ODM
- Deployed on a remote server with HTTPS and domain routing via Nginx

---

## ⚙️ Technologies Used

- **Node.js**
- **Express**
- **MongoDB** with **Mongoose**
- **JWT (JSON Web Tokens)**
- **Celebrate** (Joi validation middleware)
- **bcryptjs** (for password hashing)
- **dotenv**
- **ESLint** (Airbnb base)
- **Prettier** (code formatting)
- **Nginx** (reverse proxy + HTTPS)
- **Certbot** (SSL via Let’s Encrypt)

---

## 🛡️ Security & Validation

- All protected routes require a valid JWT token in the `Authorization` header.
- Celebrate and Joi are used to validate all input data.
- Custom error classes and middleware for error handling.

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).

---

## 👨‍💻 Author

[Pasha Zobov](https://github.com/Pavkv)
2025 © WTWR

---

Feel free to add suggestions or submit issues via GitHub.
