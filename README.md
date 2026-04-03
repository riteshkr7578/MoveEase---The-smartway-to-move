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

* 🏎️ **Multiple Service Types**: Choose from Home Shifting, Office Shifting, or Vehicle Transport.
* 🔍 **Search & Compare**: Find verified movers by city and compare based on ratings and services.
* 📍 **Precision Pricing**: Distance-based price calculation using Google Maps Distance Matrix API.
* 🗺️ **Google Places Integration**: Intelligent address selection using Autocomplete.
* 💳 **Secure Payments**: Integrated with **Razorpay** for safe online transactions.
* 📊 **Smart Dashboard**: View real-time booking history and status updates.
* 👤 **Profile Management**: Maintain personal details and manage active moves.
* 🌑 **Dark Mode Support**: Seamlessly switch between light and dark themes for better accessibility.

### 🚛 Mover Features

* 🏢 **Business Profile**: Create and manage professional mover profiles with service areas and pricing.
* 📥 **Lead Management**: Real-time dashboard for incoming customer booking requests.
* 💰 **Advanced Wallet & Ledger**:
  * Track online earnings and pending payouts.
  * **10% Commission Model**: Platform fee automatically calculated per booking.
  * **Auto-Settlement**: Automatic reconciliation where cash job commissions are deducted from online payouts.
  * Full transaction ledger for transparency.
* ✅ **Booking Lifecycle**: Accept, reject, and update statuses from Pending to Completed.
* 💸 **Payout Command Center**: Request transfers to bank and settle platform commissions.

### 👑 Admin Features

* 📈 **Analytics Dashboard**: Monitor platform growth, GMV (Gross Merchant Value), and Revenue.
* 🔮 **Revenue Forecasting**: Predictive insights based on pending bookings.
* 👥 **User Management**: Overview of all customers and movers on the platform.
* 🛡️ **Role-Based Security**: Complete administrative control over platform activity.

---

## 🛠 Tech Stack

### Frontend

* **React.js** (Vite)
* **Tailwind CSS** (Styling)
* **Lucide React** (Icons)
* **Axios** (API Requests)
* **React Router DOM** (Navigation)

### Backend

* **Node.js & Express.js**
* **MongoDB & Mongoose** (Database)
* **JWT Authentication** (Security)
* **Bcrypt.js** (Password Hashing)

### APIs & External Services

* **Google Maps Distance Matrix API**: For precise mileage-based pricing.
* **Google Places API**: For address autocomplete functionality.
* **Razorpay API**: For handling secure payments.
* **Cloudinary**: For optimized image storage and profile pictures.

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

## 📁 Project Structure (Comprehensive)

```
MoveEase/
│
├── backend/
│   ├── src/
│   │   ├── config/ (db.js)
│   │   ├── middleware/ (auth.js, admin.js)
│   │   ├── models/ (User.js, Mover.js, Booking.js, City.js)
│   │   ├── routes/ (auth.js, booking.js, admin.js, mover.js, google.js)
│   │   ├── app.js (Server configuration)
│   │   └── server.js (Server entry point)
│   ├── scripts/ (seedAdmin.js, seedCities.js)
│   ├── uploads/ (Temporary file storage)
│   ├── .env (Backend environment variables)
│   └── package.json (Backend dependencies)
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx (Root component)
│   │   ├── api.js (Axios instance with JWT interceptors)
│   │   ├── assets/ (Static images & icons)
│   │   ├── components/ (MoversList, Reveal, SearchMovers, etc.)
│   │   ├── hooks/ (useInView.js)
│   │   ├── layout/ (Navbar.jsx)
│   │   └── pages/ (Auth/, AdminDash, MoverProfile, Booking, etc.)
│   ├── public/ (Public assets)
│   ├── .env (Frontend VITE environment variables)
│   ├── tailwind.config.js (Styling configuration)
│   └── package.json (Frontend dependencies)
```

---

## ⚙️ Setup & Installation

### ✅ Prerequisites

*   **Node.js** (v18+ recommended)
*   **MongoDB** (Local instance or MongoDB Atlas)
*   **Google Maps API Key** (with Distance Matrix and Places APIs enabled)
*   **Razorpay Account** (for API keys)
*   **Cloudinary Account** (for asset management)

---

## 🔧 Environment Setup

Create `.env` files in both `backend` and `frontend` directories using the samples below:

### 1️⃣ Backend Environment (`backend/.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_strong_secret_key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 2️⃣ Frontend Environment (`frontend/.env`)

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_API_URL=http://localhost:5000
```

---

## 🛠 Installation

### 1. Clone the repo
```bash
git clone https://github.com/your-username/MoveEase.git
cd MoveEase
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
npm run start (or npm run dev)
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
npm run dev
```

---

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

### � Core Functionalities Explained

### 🔹 Search & Autocomplete

* Users find movers in their city.
* **Google Places Autocomplete** is used for precise pickup and drop address selection.

### 🔹 Distance-Based Pricing

* Pickup & drop locations are geocoded and distance is calculated via **Google Maps Distance Matrix API**.
* Final price (Estimated Cost) is calculated as:
  `Total Cost = Base Price + (Distance × Price per Km)`

### 🔹 10% Commission Model

* **Platform Fee**: A 10% platform fee is automatically deducted from the `Estimated Cost` for every booking.
* **Mover Earnings**: These are calculation as `Estimated Cost - Platform Fee`.
* **Auto-Settlement Mechanism**: For cash jobs, the commission is added to `commissionOwed`. When a mover requests a `cashout` for online earnings, the system automatically settles any outstanding commission from their balance first.

### 🔹 Payment Integration

* Secure payments powered by **Razorpay**.
* Payment statuses (`pending`, `paid`, `pay_later`) are tracked to update mover wallets accordingly.

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
