const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path")

main().then(() =>{
     console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/",(req,res) => {
    res.send("root is working")
});

app.listen(8080, () => {
    console.log("App is listning on port 8080")
})