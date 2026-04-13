# 📝 MERN Notes App with Collaborative GitHub Workflow

## 📌 Project Overview

This project is a **full-stack Notes Application** built using the **MERN stack (MongoDB, Express, React, Node.js)**.
It also demonstrates a **real-world collaborative development workflow** using GitHub, including branch protection, pull requests, issue tracking, and code reviews.

---

## 🎯 Objectives

* Build a full-stack Notes application
* Implement CRUD operations for notes
* Add basic user authentication (login & signup)
* Simulate team collaboration using multiple GitHub accounts
* Follow industry-level GitHub workflow practices

---

## 🧑‍💻 Team Roles (Simulated)

* **Backend Developer** → [sudharsans913@gmail.com](mailto:sudharsans913@gmail.com)
* **Frontend Developer** → [kongucoder24.7@gmail.com](mailto:kongucoder24.7@gmail.com)
* **Reviewer / DevOps** → [sudharsanps.23cse@kongu.edu](mailto:sudharsanps.23cse@kongu.edu)

---

## 🏗️ Tech Stack

### 🔹 Frontend

* React.js
* HTML, CSS

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Database

* MongoDB (MongoDB Compass for visualization)

### 🔹 Tools

* Git & GitHub
* Postman

---

## ⚙️ Features

### 📝 Notes Functionality

* Create notes
* View all notes
* Update notes
* Delete notes

### 🔐 Authentication (Basic)

* User signup
* User login

---

## 🗂️ Project Structure

```
mern-notes-collab/
│
├── backend/
│   ├── models/
│   │   ├── Note.js
│   │   └── User.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🔄 GitHub Workflow

### 🌳 Branch Strategy

* `main` → Production-ready code
* `develop` → Integration branch
* `feature/*` → Feature-specific branches

---

### 🔒 Branch Protection Rules

* Pull request required before merging
* Minimum 1 approval required
* Direct push restricted
* Linear commit history maintained

---

### 🔁 Development Workflow

1. Create issue
2. Create feature branch
3. Implement feature
4. Commit and push changes
5. Create pull request
6. Review and approve
7. Merge into `develop`
8. Final merge from `develop` → `main`

---

## 📌 GitHub Issues & Pull Requests

* Issues were created to track tasks such as backend setup, MongoDB connection, API development, and frontend implementation
* Pull requests were used for all code changes
* Each PR was reviewed and approved before merging
* Issues were linked using `Fixes #issue_number`

---

## 🧪 Testing

* Backend APIs tested using Postman
* MongoDB verified using MongoDB Compass
* Frontend tested via browser

---

## 🚀 How to Run the Project

### 1️⃣ Clone the repository

```
git clone https://github.com/sudharsanKEC/mern-notes-collab.git
cd mern-notes-collab
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
node server.js
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

### 4️⃣ Environment Variables

Create a `.env` file inside `backend/`:

```
MONGO_URI=mongodb://127.0.0.1:27017/notesapp
```

---

## 📊 Key Learnings

* Hands-on experience with MERN stack development
* Understanding of GitHub collaboration workflow
* Working with branch protection rules and PR reviews
* Managing issues and linking them with code changes

---

## 🎯 Conclusion

This project successfully demonstrates both:

* Full-stack web development using MERN
* Real-world collaborative development practices using GitHub

---

