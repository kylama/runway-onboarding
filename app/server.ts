import mongoose from "mongoose";
import Experience from "./models/Experience";
import Project from "./models/Project";

const connectionString =
  "mongodb+srv://kym003:<sJyzenPoLWt2rmcI>@portfoliodb.dtxi7an.mongodb.net/?appName=PortfolioDB";

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Successfully connected to MongoDB with TypeScript.");
  } catch (error) {
    console.error("Connection error:", error);
    process.exit(1);
  }
};

connectDB();
