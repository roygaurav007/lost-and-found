# 🔍 FindIt – Lost & Found Web Application

FindIt is a **full-stack MERN Lost & Found web application** designed to help students and communities report, browse, and recover lost items efficiently.

---

## 🚀 Features

### 👤 Authentication
- User Signup (Student / Admin)
- User Login with JWT Authentication
- Role-based access (Student & Admin)

### 📦 Lost & Found
- Report lost items
- Browse all reported items
- View personal reported items (Student Hub)
- Admin dashboard for management

### 🛡 Security
- Password hashing using bcrypt
- JWT-based protected routes
- Role-based authorization

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- Tailwind CSS
- React Hook Form
- Zod (validation)

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcryptjs
- CORS

---
lost-and-found/
│
├── backend/
│ └── server/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── app.js
│ ├── server.js
│ └── package.json
│
├── frontend/
│ └── client/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── context/
│ │ └── utils/
│ └── package.json
│
└── README.md


---

## ⚙️ Environment Variables

Create a `.env` file inside `backend/server/`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

▶️ Run Locally
1️⃣ Clone the repository
git clone https://github.com/your-username/lost-and-found.git
cd lost-and-found

2️⃣ Backend setup
cd backend/server
npm install
npm run dev


Backend runs on:

http://localhost:5000

3️⃣ Frontend setup
cd frontend/client
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🧪 API Endpoints
Auth

POST /api/auth/register – Register user

POST /api/auth/login – Login user

Items

GET /api/items – Browse items

POST /api/items – Report item (protected)

GET /api/items/my – My reported items (protected)

📌 Future Enhancements

Email / OTP verification

Item claim workflow

Image upload for items

Notifications system

Deployment (Render + Netlify)

👨‍💻 Author

Sujal Vats
Gaurav Roy
B.Tech IT Student
📍 India

⭐ Support

If you like this project, don’t forget to star ⭐ the repository!

📜 License

This project is licensed under the MIT License.


## 📂 Project Structure

