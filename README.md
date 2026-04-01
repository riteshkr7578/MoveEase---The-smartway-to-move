# 🚚 MoveEase – Smart Packers & Movers Platform

**Full-Stack Web Application**

MoveEase is a **full-stack web application** designed to simplify the process of searching, comparing, and booking **verified packers & movers** with transparent pricing and a seamless booking experience.

The platform addresses a **real-world logistics problem** by connecting customers with movers through a secure, role-based system and a scalable backend architecture.

---

## 🌟 Project Overview

Finding reliable packers & movers is often time-consuming, unstructured, and lacks price transparency.
**MoveEase** solves this by providing:

* A centralized platform for customers to discover movers
* Distance-based pricing using Google Maps
* Secure booking and tracking
* Dedicated dashboards for both customers and movers

The application is built using modern **full-stack technologies** with a focus on **security, scalability, and clean architecture**.

---

## ✨ Key Features

### 👤 Customer Features

* 🔍 Search packers & movers by city
* 📊 Compare available movers
* 📍 Distance-based price calculation
* 📝 Secure booking of movers
* 📂 View all bookings in personal dashboard
* ❌ Cancel pending bookings
* 🔐 Secure login & signup using JWT authentication

### 🚛 Mover Features

* 🏢 Create and manage mover business profile
* 📥 View customer booking requests
* ✅ Accept or ❌ reject bookings
* 🔄 Update booking status
  *(Pending → Accepted → Rejected → Completed)*

---

## 🛠 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### APIs & Services

* Google Maps Distance Matrix API *(distance calculation)*
* RESTful API architecture

---

## 🔐 Authentication & Authorization

* JWT-based authentication
* Role-based access control:

  * `customer`
  * `mover`
* Protected routes using middleware
* Secure access to dashboards and bookings
* Authorization checks on every sensitive API route

---

## 📁 Project Structure (Simplified)

```
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
```

---

## ⚙️ Setup & Installation

### ✅ Prerequisites

* Node.js (v16+ recommended)
* MongoDB (local or Atlas)
* npm
* Google Maps API key

---

## 🔧 Backend Setup

### 1️⃣ Navigate to Backend Folder

```bash
cd backend
npm install
```

### 2️⃣ Backend Environment Variables

Create a `.env` file inside the `backend` directory.

**Example (`backend/.env`):**

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/moveease
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

> ⚠️ These values are **examples only**.
> Use your own credentials when running locally.

### 3️⃣ Start Backend Server

```bash
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

## 🎨 Frontend Setup

### 1️⃣ Navigate to Frontend Folder

```bash
cd frontend
npm install
```

### 2️⃣ Frontend Environment Variables

Create a `.env` file inside the `frontend` directory.

**Example (`frontend/.env`):**

```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### 3️⃣ Start Frontend Server

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 📊 Core Functionalities Explained

### 🔹 Search Movers

* Users select a city
* Backend filters movers using **case-insensitive queries**
* Results are dynamically displayed on the frontend

### 🔹 Distance-Based Pricing

* Pickup & drop locations selected using Google Places
* Distance calculated using Google Maps Distance Matrix API
* Price calculated as:

```
Total Cost = Base Price + (Distance × Price per Km)
```

### 🔹 Booking System

* Customers create booking requests
* Movers manage booking lifecycle
* Booking access is strictly controlled using roles
* Customers can only view **their own bookings**
* Movers can only manage **assigned bookings**

---

## 🧠 Architectural Highlights

* Modular backend structure
* Clear separation of routes, controllers, models, and middleware
* Secure role-based route protection
* Scalable REST API design
* Centralized API handling using Axios
* Responsive UI built with Tailwind CSS

---

## 📘 Documentation Note

📌 **Note:**
All project details, features, setup instructions, and architectural explanations are fully documented in this README. Reviewers are encouraged to refer to this document for complete information.

---

## 👨‍💻 Author

**Ritesh Kumar**
Full-Stack Developer(MERN)
