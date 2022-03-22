import express from "express";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/APIv1";
const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(cors());
app.get("/", (req, res) => {
    res.json({
        message: "Base api"
    });
});
app.use("/api", router);
app.use((err, req, res, next) => {
    res.status(err.statusCode).json(err.message);
});
app.listen(process.env.PORT, () => {
    console.clear();
    console.log("Server started at port : " + process.env.PORT);
});
