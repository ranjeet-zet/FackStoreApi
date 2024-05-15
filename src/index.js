import dotenv from "dotenv";
import app from "./app.js";
import connectDB from './DB/index.js'
import storeRoute from './routes/store.route.js'
dotenv.config({
    path: './.env'
})

app.use('/api/v1/stores', storeRoute)
app.use((req, res, next) => {
    res.status(404).send({ message: "Route not found" })
})
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`⚙️  Server is running on port ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log("Error in connecting to DB", error)
})