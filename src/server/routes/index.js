/* PURPOSE:
    meant to pull in all of the routes ,
    and put it into one router and send that over to server.js
 */

const express = require("express");
const chirpsRouter = require("./chirps");
// const usersRouter = require("./users");

let router = express.Router();

router.use("/chirps", chirpsRouter);
// router.use("/users", usersRouter);

module.exports = router;