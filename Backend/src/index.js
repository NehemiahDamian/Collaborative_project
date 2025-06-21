import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res)=>{
  res.send("<h1>Hello world</h1>")
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running smoothly"
  });
});


app.listen(PORT, () => {
  console.log('tae server is running on port', PORT);
});