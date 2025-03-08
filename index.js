import express from "express";
import router from "./allRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv"; // ✅ Import dotenv
import cors from "cors";
dotenv.config(); 

const app = express();
app.use(express.json());

console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI, )
  .then(() => console.log("🔥 MongoDB Connected!"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));



app.use(
  cors({
    origin: "http://localhost:5173",  
    methods: ["GET", "POST", "PUT", "DELETE"],  
    allowedHeaders: ["Content-Type", "Authorization"],  
    credentials: true,  
  })
);
app.use("/api", router);

app.listen(8000, () => {
  console.log("App is listening on port 8000");
});

