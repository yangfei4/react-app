import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import storyRoutes from './routes/stories.js';

const app = express();

app.use(bodyParser.json({ limit: "32mb", extended: true })); // 
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true })); //req.body
app.use(cors());
// any route under http://localhost:5001/stories will invoke response in storyRoutes
app.use("/stories", storyRoutes); // middleware for "/stories" -> added prefix route

const MONGO_URI = "mongodb+srv://yangfei:xiaobude321@cluster0.e7sthln.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5001;

const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URI);
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    } catch (err) {
        console.error("Connection to MongoDB failed", err.message);
    }
}

connectDB();

mongoose.connection.on("open", () => console.log("Connection to database has been established successfully"));
mongoose.connection.on("error", (err) => console.log(err));