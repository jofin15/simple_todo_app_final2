
import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';  // Explicitly import 'resolve'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Define your API routes
app.use("/", Routes);

// Configure static file serving middleware
app.use(express.static(resolve(__dirname, "client", "build")));  // Use 'resolve' instead of 'path.resolve'

// Define a catch-all route for serving the index.html file
app.get("*", (req, res) => {
    res.sendFile(resolve(__dirname, "client", "build", "index.html"));  // Use 'resolve' here as well
});

Connection();

app.listen(PORT, () => {
    console.log(`Your server is running at port ${PORT}`);
});
