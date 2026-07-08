# 📝 Todo App

A full-stack **Todo Application** built using **React + Vite** for the frontend and **Django REST Framework** for the backend. The application provides secure user authentication using **JWT (JSON Web Tokens)** and allows users to efficiently manage their personal tasks with complete CRUD functionality.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Automatic token-based authentication
- Secure API access using access & refresh tokens

---

### ✅ Todo Management
- Create a new todo
- View all todos for the authenticated user
- Edit existing todos
- Delete todos
- Mark todos as Completed
- Mark todos as Uncompleted
- User-specific todo list

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Django
- Django REST Framework
- JWT Authentication
- PostgreSQL

---

## 🔑 Authentication Flow

1. User registers for a new account.
2. User logs in with valid credentials.
3. Backend generates JWT Access and Refresh Tokens.
4. Frontend stores the tokens securely.
5. Authenticated users can access protected routes.
6. All Todo API requests require a valid JWT Access Token.

---

## 📋 Todo Workflow

- User logs in.
- User is redirected to the **Create Todo** page.
- User creates a new todo.
- After successfully adding a todo, the application redirects to the **Todo List** page.
- Users can:
  - Edit a todo
  - Delete a todo
  - Mark a todo as completed
  - Mark a todo as uncompleted

---

## 📸 Application Screens

- Login Page
- Registration Page
- Create Todo Page
- Todo List Page

---

## 🔒 Security

- JWT Authentication
- Protected API Endpoints
- User-specific Todos
- Unauthorized users cannot access protected resources

---

## 🌟 Future Improvements

- Search Todos
- Filter by Completed/Pending
- Pagination
- Due Dates
- Categories
- Dark Mode
- Profile Page
- Password Reset

---

# Author

**Aswin**

GitHub: https://github.com/ASWIN0409

---

## 📄 License

This project is licensed under the MIT License.