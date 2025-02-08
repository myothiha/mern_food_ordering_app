import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";

// setup DB connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log("Connected to the database."))

const app = express();

// Add middlewares

// Convert all income resquest body into json.
app.use(express.json())
app.use(cors());

// Both Request and Response type comes from express.
app.get("/test", async(req: Request, res: Response) => {
    res.json({"message": "Hello"});
});

app.listen(7000, () => {
    console.log("Server start on http://localhost:7000")
});