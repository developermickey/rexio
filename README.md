# 🚀 REXIO-API — Modern Fetch-Powered HTTP Request Library

![npm](https://img.shields.io/npm/v/rexio-api)
![downloads](https://img.shields.io/npm/dw/rexio-api)
![license](https://img.shields.io/npm/l/rexio-api)
![size](https://img.shields.io/bundlephobia/minzip/rexio-api)
![node](https://img.shields.io/node/v/rexio-api)

Rexio-API is a lightweight, axios-style HTTP client built using native **fetch()**
with a clean, minimal API designed for **Node.js, Browser, React, Next.js & API apps**.

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

## 🔥 Quick Start

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

## 🧪 Request with Body + Headers

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

## 🌍 Use Without baseURL

```js
const api = new Rexio();

api.get("https://dummyjson.com/products/1").then(console.log);
```

---

## 📌 Configuration Options

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

✔ Small & lightweight  
✔ Works client + server  
✔ Very simple API  
✔ No dependencies  
✔ Modern fetch-powered engine

---

## 🚀 Upcoming in **Rexio-API v2**

🔹 Request & Response Interceptors  
🔹 Timeout & Retry  
🔹 Upload / Download Progress  
🔹 TypeScript Support  
🔹 Plugin System

---

## 🤝 Contributing

Pull Requests are welcome.  
Open issues & feature suggestions appreciated.

---

## 📝 License

MIT — free for personal & commercial use.
