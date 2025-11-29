# 🚀 REXIO-API — Modern Fetch-Powered HTTP Request Library

**Created & Maintained by: _Mukesh Pathak_**  
Passionate JavaScript Engineer | Open‑Source Builder

![npm](https://img.shields.io/npm/v/rexio-api)
![downloads](https://img.shields.io/npm/dw/rexio-api)
![license](https://img.shields.io/npm/l/rexio-api)
![size](https://img.shields.io/bundlephobia/minzip/rexio-api)
![node](https://img.shields.io/node/v/rexio-api)

Rexio-API is a lightweight, axios-style HTTP client built using native **fetch()**
with a clean, minimal API designed for **Node.js, Browser, React, Next.js & API apps**.

Fast. Simple. Modern.

---

## 📦 Installation

```bash
npm install rexio-api
```

or

```bash
yarn add rexio-api
```

---

## 🔥 Usage Example

```js
import Rexio from "rexio-api";

const api = new Rexio({ baseURL: "https://jsonplaceholder.typicode.com" });

const data = await api.get("/posts/1");
console.log(data);
```

---

## ⚡ API Methods

| Method   | Example Usage                  |
| -------- | ------------------------------ |
| `GET`    | `api.get("/users")`            |
| `POST`   | `api.post("/users", data)`     |
| `PUT`    | `api.put("/users/1", data")`   |
| `PATCH`  | `api.patch("/users/1", data")` |
| `DELETE` | `api.delete("/users/1")`       |

---

## 🧪 Request with Headers + Body

```js
api
  .post(
    "/posts",
    { title: "Rexio API", body: "Hello world!", userId: 1 },
    { Authorization: "Bearer 12345" }
  )
  .then(console.log);
```

---

## 🌍 Without baseURL

```js
const api = new Rexio();
api.get("https://dummyjson.com/products/1").then(console.log);
```

---

## 📌 Config Options

```js
new Rexio({
  baseURL: "https://api.example.com",
  headers: {
    Authorization: "Bearer token123",
    "X-Custom-Header": "Hello",
  },
});
```

---

## 🔥 Features

✔ Fetch Powered  
✔ Works in Node & Browser  
✔ Minimal API  
✔ No Dependencies  
✔ Fast & Clean

---

## 🚀 Coming Soon — Rexio v2

🔹 Interceptors like Axios  
🔹 Retry + Timeout  
🔹 Upload Progress  
🔹 TypeScript Support  
🔹 Plugin System

---

## 🧑‍💻 Author

**👤 Mukesh Pathak**  
📌 Open Source Developer  
💻 Building Rexio & More JavaScript Tools  
⭐ Show support — Star on GitHub!

---

## 📝 License

MIT — Free for personal & commercial projects
