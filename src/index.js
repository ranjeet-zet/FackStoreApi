import dotenv from "dotenv";
import app from "./app.js";
import connectDB from './DB/index.js'
import storeRoute from './routes/store.route.js'
dotenv.config({
    path: './.env'
})
// Mounting the storeRoute
app.use('/api/v1/stores', storeRoute)
// Global error handler middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        error: {
            message: err.message || "An internal server error occurred"
        }
    });
});
// Route not found middleware
app.use((req, res, next) => {
    res.status(404).send({ message: "Route not found" })
})
// Connect to DB and start the server
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`⚙️  Server is running on port ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log("Error in connecting to DB", error)
})