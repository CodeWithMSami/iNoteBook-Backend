# 🚀 iNoteBook Backend

A secure and scalable REST API for the **iNoteBook** application. This backend provides user authentication, note management, and MongoDB database integration using Node.js and Express.js.

## ✨ Features

* 🔐 User Authentication (JWT)
* 👤 User Registration & Login
* 📝 Create Notes
* 📖 Read Notes
* ✏️ Update Notes
* 🗑️ Delete Notes
* 🛡️ Protected Routes
* 🌐 RESTful API Architecture
* 📦 MongoDB Database Integration

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT Authentication**
* **bcrypt.js**
* **dotenv**

## 📂 Project Structure

```text
backend/
├── bin/
├── middleware/
├── models/
├── routes/
├── db.js
├── app.js
├── package.json
└── .env
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/CodeWithMSami/iNoteBook-Backend.git
cd iNoteBook-Backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

### 4. Start the Server

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

## 🔗 API Endpoints

### Authentication

| Method | Endpoint               | Description            |
| ------ | ---------------------- | ---------------------- |
| POST   | `/api/auth/createuser` | Register a new user    |
| POST   | `/api/auth/login`      | Login user             |
| POST   | `/api/auth/getuser`    | Get authenticated user |

### Notes

| Method | Endpoint                    | Description     |
| ------ | --------------------------- | --------------- |
| GET    | `/api/notes/fetchallnotes`  | Fetch all notes |
| POST   | `/api/notes/addnote`        | Create note     |
| PUT    | `/api/notes/updatenote/:id` | Update note     |
| DELETE | `/api/notes/deletenote/:id` | Delete note     |

## 🔒 Authentication

Protected routes require a valid JWT token in the request header:

```http
auth-token: YOUR_JWT_TOKEN
```

## 🚀 Future Improvements

* Email Verification
* Password Reset
* Note Categories
* File Attachments
* Rate Limiting
* API Documentation

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository, create a feature branch, and submit a pull request.

## 📄 License

This project is licensed under the MIT License.

---

Developed with ❤️ by CodeWithMSami