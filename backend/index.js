import express from "express";
import CORS from "cors";
const app = express();
const port = 5000;
app.use(CORS({
    origin: "*"
}));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/test", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});