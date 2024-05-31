// Simple express server
import express from "express";
import mongoose from "mongoose";
import products from "./routes/products.js";

const app = express();

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// Routes
app.use("/api/products", products);
