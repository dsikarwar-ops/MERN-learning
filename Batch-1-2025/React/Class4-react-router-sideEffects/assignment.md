# 📝 React Product Management App

A small project to practice core React concepts — including **React Router**, `useNavigate`, `useParams`, `useState`, `useRef`, and LocalStorage — while building a semantic, clean UI without any external component library.

---

## 🧠 Concepts Covered
- ✅ React Router (v6) — Layout Routes, Navigation, URL params
- ✅ `useState` & `useRef` for form handling and UI state
- ✅ LocalStorage for authentication and persistence
- ✅ Fetching data from a dummy API (`json-server`)
- ✅ Semantic HTML & CSS (no UI framework)
- ✅ Basic route protection (auth guard)

---

## 🧭 Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | **Home** | Display a product list with hover effects |
| `/product/:id` | **Product Detail** | Show details for a single product |
| `/product/:id/edit` | **Edit Product** | Edit form (protected route) |
| `/login` | **Login Page** | LocalStorage-based login |
| `*` | 404 | Optional fallback or redirect |

> 📝 Use a **Layout Route** with `<Outlet />` so that the Navbar is rendered once and persists across navigation.

---

## 🛠️ Dummy API Setup (json-server)

Install:
```bash
npm install -g json-server
```

Create `db.json`:
```json
{
  "products": [
    { "id": 1, "name": "Wireless Mouse", "price": 15.99, "description": "Smooth and responsive" },
    { "id": 2, "name": "Mechanical Keyboard", "price": 45.50, "description": "Tactile and durable" },
    { "id": 3, "name": "Gaming Headset", "price": 30.00, "description": "Immersive sound" }
  ]
}
```

Run:
```bash
json-server --watch db.json --port 4000
```

Endpoints:
- `GET /products`
- `GET /products/:id`
- `POST /products`
- `PATCH /products/:id`

---

## 🔐 Authentication (LocalStorage)

- Hardcode a single user:
  ```json
  {
    "username": "admin",
    "password": "1234"
  }
  ```

- On login, if credentials match → store the user in `localStorage`.
- Protect the `/product/:id/edit` route by checking for logged-in user.
- On logout, clear the localStorage and navigate back to `/login`.

---

## 🧱 Folder Structure

```
src/
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ ProductCard.jsx
 │   └─ ProductForm.jsx
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ ProductDetail.jsx
 │   ├─ EditProduct.jsx
 │   └─ Login.jsx
 ├─ hooks/
 │   └─ useLocalStorage.js
 ├─ api/
 │   └─ dummyApi.js
 ├─ App.jsx
 └─ main.jsx
```

---

## ✨ Extra Features (Optional)

| Feature | Concept |
|---------|---------|
| Add to Cart stored in LocalStorage | Persistent state |
| Search / Filter on Home | Array filtering |
| 404 Page | Routing fallback |
| Custom `useFetch` Hook | Reusability |
| Toasts / Notifications | Better UX |

---

## 🧠 Suggested Build Order

1. ✅ Set up React Router + Navbar Layout  
2. 🏠 Build Home Page (Fetch products, display list)  
3. 🔍 Product Detail Page (useParams)  
4. ✍️ Edit Product Page (Form, PATCH request)  
5. 🔐 Login Page + LocalStorage Auth (useRef)  
6. 🚧 Protect Edit Route  
7. 🎨 Polish UI with semantic HTML + CSS

---

## 🚀 Tech Stack
- **React** (Vite or CRA)
- **React Router v6**
- **json-server** for fake API
- **LocalStorage** for auth
- **Plain CSS** for styling & hover effects

---

## ✅ Goals
By the end of this project, you will:
- Understand routing & navigation deeply
- Use URL params & programmatic navigation effectively
- Manage form data with refs and state
- Persist data in localStorage
- Work with a fake REST API for CRUD operations
- Build a semantic UI layout from scratch