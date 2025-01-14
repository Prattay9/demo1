require("dotenv").config();
const express = require('express');
const cors = require("cors");
const app = express()
const connectDB = require("./dbconn");
const PORT = process.env.PORT;
const path=require("path");

const corsOption = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials: true,
}

app.use(cors(corsOption));
app.use(express.json());
const _dirname=path.dirname("");
const buildpath = path.join(_dirname,"../frontend/build");
const authRouter = require("./routes/auth-routes");
const contactRouter = require("./routes/contact-routes");
const mailRouter = require("./routes/mail-routes");
const msgRouter = require("./routes/msg-routes");

app.use(express.static (buildpath));
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/mail", mailRouter);
app.use("/api/msg", msgRouter);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port no : ${PORT}`)
    });
});



