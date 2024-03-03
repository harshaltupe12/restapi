require("dotenv").config();
const cors = require('cors');
const express = require("express")
const app = express();
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 5000;
app.use(cors());
app.get("/", (req, res)=>{
    res.send("Hello Backend is Working");
})
const product_route = require("./routes/products")
app.use("/api/products", product_route)

const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URl);
        app.listen(PORT, ()=>{
            console.log(`${PORT} is Runing`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();