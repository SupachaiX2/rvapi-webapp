import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!!!!!!!!!!!!!!!!!!"))
  .catch((err) => console.error(err));


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });
const Product = mongoose.model("Product", productSchema);
  

app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
  });
app.post("/products", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});



app.get('/', (req, res) => {
    res.send(`
        
<!DOCTYPE html>
        <html lang="th">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Example</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f0f4f8;
                        color: #333;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    .container {
                        text-align: center;
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        width: 80%;
                        max-width: 600px;
                    }
                    h1 {
                        color: #007bff;
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 18px;
                        line-height: 1.6;
                        color: #555;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>ยินดีต้อนรับ</h1>
                    <p>-</p>
                </div>
            </body>
        </html>
    `);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}!!!!!!!!!!!!`));