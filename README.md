# 🚀 Cactro Backend CRUD – 
---

## 🧠 Project Structure

```
src/
├── config/         # All configuration setups (e.g., dotenv)
├── controllers/    # Receives HTTP data, handles request/response flow.
├── middlewares/    # Interceptors for auth.
├── models/         # Mongoose models.
├── routes/         # API routing layer
├── utils/          # Helper functions.
└── index.js        # Entry point
```

### Folder Breakdown

- **`config/`**  
  Contains setup for environment variables, logging, and other configuration needs.  
  Example: `server-config.js` for dotenv setup, Winston logger setup.

- **`routes/`**  
  Handles all route declarations and connects them to controllers and middleware.

- **`middlewares/`**  
  Custom middlewares like authenticators, validators, etc., that run before the controller.

- **`controllers/`**  
  The last middleware before the business logic. Handles request data and response formatting.

- **`utils/`**  
  Utility functions, constants, and custom error classes.

---

## 🛠️ Getting Started

### 📦 Install Dependencies

```bash
npm install
```

### ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```

---

## 🚀 Running the Server

### Development Mode

```bash
npm run dev
```

> This uses `nodemon` for hot reloading.

---

## 📡 Base API URL

```
BASE_URL = http://localhost:3000/api/v1
```

---

## 🔐 Auth Routes

### ✅ Register a New User

**Endpoint:** `POST /api/v1/auth/register`

#### Request Body

```json
{
  "email": "test@example.com",
  "password": "yourPassword"
}
```

#### Response

```json
{
  "success": true,
  "message": "User created successfully",
  "user": {
    "email": "test@example.com"
  },
  "token": "<jwt_token>"
}
```

---

### ✅ Login a User

**Endpoint:** `POST /api/v1/auth/login`

#### Request Body

```json
{
  "email": "test@example.com",
  "password": "yourPassword"
}
```

#### Response

```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "email": "test@example.com"
  },
  "token": "<jwt_token>"
}
```

---

## 📋 Task Routes

> All task routes require a valid JWT token in the Authorization header.

**Header:**

```
Authorization: Bearer <jwt_token>
```

### 🔨 Create Task

**POST** `/api/v1/task/`

#### Body:
```json
{
  "title": "Sample Task",
  "description": "Task description",
  "status":"Anyone:- ['pending', 'in-progress', 'completed']," 
}
```

### 📥 Get All Tasks

**GET** `/api/v1/task/`

### 📝 Update Task

**PUT** `/api/v1/task/:id`

#### Body:
```json
{
  "title": "Updated Title"
}w
```

### ❌ Delete Task

**DELETE** `/api/v1/task/:id`

---

## 📄 API Testing Tools

Use [Postman](https://www.postman.com/) to test the API endpoints.

---

## 📄 Postman Collection Link

Use this - ( https://.postman.co/workspace/My-Workspace~abe6bad2-4e2e-488b-8896-ca2a0ee13ab1/collection/33665598-1ada8d7e-447e-4960-87f0-4eb6ca47599e?action=share&creator=33665598 )

---

## 📄 Deployment details 

Deployed on Render.com, free tier instance.

---

## 📄 Deployment Link :- (https://cactro-backend-crud.onrender.com)

---


## 📬 Contributions

Feel free to open issues or submit pull requests if you find bugs or want to improve the project.