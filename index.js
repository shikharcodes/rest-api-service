const express = require("express");
const { connectMongoDb } = require("./connection");

const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares");

const app = express();
const PORT = 8000;

// connection
connectMongoDb("mongodb://127.0.0.1:27017/rest-api-sample")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB connection error", err));

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));