import express from "express";
import 'dotenv/config';
const app = express();
app.listen(process.env.PORT, () => {
    console.clear();
    console.log("Server started at port : " + process.env.PORT);
});
