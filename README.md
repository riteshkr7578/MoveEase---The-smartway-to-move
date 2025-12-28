🚚 MoveEase – Smart Packers & Movers Platform (Full-Stack Web App)

MoveEase is a full-stack web application that helps users search, compare, and book verified packers & movers with transparent pricing and a smooth booking experience.

The project focuses on solving a real-world logistics problem using modern full-stack technologies, role-based access control, and scalable backend architecture.

✨ Key Features
👤 Customer Features

🔍 Search packers & movers by city

📊 Compare available movers

📍 Distance-based price calculation

📝 Book movers securely

📂 View all bookings in personal dashboard

❌ Cancel pending bookings

🔐 Secure login & signup (JWT)

🚛 Mover Features

🏢 Create mover business profile

📥 View customer bookings

✅ Accept / ❌ Reject bookings

🔄 Update booking status (Pending → Accepted / Rejected / Completed)

🛠 Tech Stack
Frontend

React.js

Tailwind CSS

Axios

React Router DOM

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

APIs & Services

Google Maps Distance Matrix API (for distance calculation)

RESTful API architecture

🔐 Authentication & Authorization

JWT-based authentication

Role-based access control:

customer

mover

Protected routes using middleware

Secure access to bookings and dashboards

📁 Project Structure (Simplified)
MoveEase/
│
├── backend/
│   ├── routes/
│   │   ├── auth.js
│   │   ├── movers.js
│   │   ├── booking.js
│   ├── models/
│   ├── middleware/
│   ├── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│
└── README.md

⚙️ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/moveease.git
cd moveease

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API_KEY=your_google_maps_api_key


Start backend server:

npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

📊 Core Functionalities Explained
🔹 Search Movers

Users select a city

Backend filters movers using case-insensitive queries

Results displayed dynamically on frontend

🔹 Distance-Based Pricing

Pickup & drop locations selected using Google Places

Distance calculated via Google Maps API

Cost estimated using:

Total Cost = Base Price + (Distance × Price per Km)

🔹 Booking System

Customers can create bookings

Movers manage booking status

Secure access ensured via role checks
