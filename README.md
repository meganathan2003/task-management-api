
# Project Name: Task-Management

## Description
This is a backend API for managing recipes, built using Node.js, Express.js, and MongoDB. It includes CRUD operations, user authentication, and deployment on Render.

---

## Features
- User Authentication (JWT-based)
- CRUD operations for [entities, e.g., recipes, users, etc.]
- MongoDB for database management
- API documentation using Postman
- Deployed on [Render] for live access

---

## Setup Instructions

### Prerequisites
Ensure the following are installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (or any other database you're using)
- NPM or Yarn package manager

---

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/meganathan2003/task-management-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repository
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

### Configuration
1. Create a `.env` file in the root directory of your project.
2. Add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
   JWT_SECRET=your_jwt_secret_key
   ```

---

### Running the Application
1. Start the server in development mode:
   ```bash
   npm run dev
   ```
2. Start the server in production mode:
   ```bash
   npm start
   ```

3. Once the server is running, you can access the API at:
   ```
   http://localhost:5000
   ```

---

## API Documentation

### Postman Collection
To test the API, import the Postman collection provided in this repository:
- [Download Postman Collection](./Task%20Management.postman_collection.json)

This collection includes all the endpoints, example requests, and responses for:
- Authentication
- CRUD operations

---

## Deployment Details

### Deployed URL
The live API is deployed and accessible at:
- **Base URL**: [https://task-management-api-k7mm.onrender.com](https://task-management-api-k7mm.onrender.com)

### Deployment Platform
The API is deployed using [Render](https://render.com).

### Deployment Steps
1. Push your code to the main branch of your GitHub repository.
2. [Render/vercel] will automatically build and deploy your project. Ensure the correct `vercel.json` or equivalent deployment configuration is set.
3. Add the `.env` configuration in your deployment platform settings:
   - Example:
     ```
     PORT=5000
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
     JWT_SECRET=your_jwt_secret_key
     ```

---

## API Endpoints Overview
Here’s a summary of the available API endpoints:

### Authentication
| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | `/api/auth/signup` | Register a new user |
| POST   | `/api/auth/login`  | Authenticate a user |

### CRUD Operations
| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/api/tasks`     | Get all task         |
| POST   | `/api/tasks`     | Create a new task    |
| PUT    | `/api/tasks/:id` | Update an task by ID |
| DELETE | `/api/tasks/:id` | Delete an task by ID |

---

## License
This project is licensed under the MIT License.
