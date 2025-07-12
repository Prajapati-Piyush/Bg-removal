# 🧼 Erazor – Background Removal API

🔗 **Live API**: [`https://your-vercel-url.vercel.app/api/image/remove-bg`](#)  
🔐 **Authentication**: JWT + Clerk  
💳 **Credits System**: 1 credit per background removal  
🧠 **Powered by**: ClipDrop AI API

---

## 📌 Overview

**Erazor** is a production-ready background removal service built with Node.js and Express. Users can upload an image and receive a processed version with the background removed — optimized for fast, scalable integration with your frontend or e-commerce platform.

---

## ✨ Features

- 📤 Upload images using `form-data`
- 🧠 AI-powered background removal via [ClipDrop API](https://clipdrop.co/apis/remove-background)
- 🔐 Secure user authentication with Clerk + JWT
- 💰 Credit-based usage system (1 credit per image)
- 🛡️ Middleware protection for API routes
- 📁 Multer integration for handling file uploads

---

## 🧰 Tech Stack

### 🚀 Backend
- **Node.js**, **Express.js**
- **Multer** for image uploads
- **Axios** & **Form-Data** for HTTP requests
- **MongoDB** with **Mongoose**
- **dotenv** for env config
- **JWT** for route protection
- **Clerk** for authentication & user management

### 🤖 Third-Party API
- [ClipDrop - Remove Background](https://clipdrop.co/apis/remove-background)

---


---

## 🧪 How to Use

### 🔁 Prerequisites
- Node.js v14+
- MongoDB URI
- Clerk project with JWT setup
- ClipDrop API key

### 🛠️ Installation

```bash
git clone https://github.com/your-username/bg-removal-api-erazor.git
cd server
npm install

cd client
npm install


