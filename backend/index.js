import express from "express";
import CORS from "cors";
const app = express();
app.use(CORS({
    origin: "*"
}));
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
  });
app.get("/test", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

export default app;