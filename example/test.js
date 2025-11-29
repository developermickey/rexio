import Rexio from "../index.js";

const api = new Rexio({ baseURL: "https://jsonplaceholder.typicode.com" });

api.get("/posts/1")
    .then(res => console.log("Response:", res))
    .catch(err => console.error("Error:", err.message));