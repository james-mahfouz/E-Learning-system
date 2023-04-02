const express = require('express');
const cluster = require("cluster");
const OS = require("os")
const cors = require('cors');
require("dotenv").config();
const path = require('path');

const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'uploads')));

const authRouter = require("./routes/auth.routes")
app.use('/auth', authRouter)

const userRouter = require("./routes/user.routes")
const { authMiddleware } = require("./middlewares/auth.middleware");
app.use('/user', authMiddleware, userRouter)

const adminRouter = require("./routes/admin.routes")
const { adminMiddleware } = require("./middlewares/admin.middleware");
app.use("/admin", authMiddleware, adminMiddleware, adminRouter)

if (cluster.isMaster) {
    const numCpus = OS.cpus().length;
    for (let i = 0; i < numCpus; i++) {
        cluster.fork();
    }
} else {
    app.listen(process.env.PORT, (err) => {
        if (err) console.error(err)
        console.log(`Worker ${process.pid} is running on port `, process.env.PORT);
        require("./configs/db.config")
    });
}