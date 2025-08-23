# Greenora

Greenora is a simple product management application built with **Next.js 15 (App Router)** and **MongoDB**.  
It provides APIs to manage products and supports both listing all products and retrieving a product by its ID.

---

## 🚀 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/greenora.git
   cd greenora
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## 📌 Route Summary

### API Routes

| Method | Endpoint                  | Description                        |
|--------|----------------------------|------------------------------------|
| GET    | `/api/products`           | Fetch all products                 |
| GET    | `/api/products/[id]`      | Fetch a single product by its ID   |

---

## 🛠 Tech Stack
- **Next.js 15** (App Router)
- **MongoDB** (Database)
- **Vercel** (Deployment)

---

## 📄 License
This project is licensed under the MIT License.
