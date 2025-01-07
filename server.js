import express from "express";
import connectToMongoose from './config/dbConfig.js'
import jobsRoutes from './routes/routes.js'
const port = process.env.port;


const app = express();
app.use(express.json());


app.use("/api", jobsRoutes);

connectToMongoose();


    app.listen(port, () => {
        console.log(`server running on port ${port}`);
    });
