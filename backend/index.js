const express = require('express');
const cluster = require("cluster");
const OS = require("os")
const app = express()
require("dotenv").config();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

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