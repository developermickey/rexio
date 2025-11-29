# 🚀 REXIO — Modern Fetch-powered HTTP Request Library

Rexio is a lightweight, axios-like HTTP client designed for Node.js & browsers.
Simple syntax, powerful design — great for APIs.

---

## 📦 Install

```
npm install rexio
```

---

## 🔥 Basic Usage

```js
import Rexio from "rexio";

const api = new Rexio({ baseURL: "https://jsonplaceholder.typicode.com" });

const user = await api.get("/posts/1");
console.log(user);
```

---

### Methods Supported

| Method | Example |
|--------|---------|
| GET    | `api.get("/users")` |
| POST   | `api.post("/users", data)` |
| PUT    | `api.put("/users/1", data)` |
| PATCH  | `api.patch("/users/1", data)` |
| DELETE | `api.delete("/users/1")` |

---

### Future Updates

- Interceptors like Axios
- Timeout + Retry
- File Upload/Download Progress
- TypeScript Version

MIT Licensed — contributions welcome.
