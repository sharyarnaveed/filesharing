const express = require("express");
const cors = require("cors");
const path = require("path");

const app=express()

app.use(
    cors({
        origin: "*",
        credentials:true
    })
)

app.use(express.json());
app.use(express.urlencoded({ limit: "100kb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));



const userroutes=require('./routes/user.routes.js')

app.use("/api/user",userroutes)

module.exports= {app}