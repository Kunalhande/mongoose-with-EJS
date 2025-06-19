const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, "public")))
 
main().then(() =>{
     console.log("connection successful")
})
.catch((err) => {console.log(err)});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//New route
app.get("/chats/new", (req,res) =>{
  res.render("new.ejs")
})

//Index Route
app.get("/chats", async (req, res) => {
  try {
    let chats = await chat.find();
    console.log(chats);
    res.render("index", { chats }); // ✅ Only one response method
  } catch (err) {
    console.error(err);
    res.send("Error loading chats");
  }
});

// let chat1 = new chat({
//   from:"hk",
//   To:"rk",
//   message:"hi, how are you",
//   created_at:new Date,
// })

// chat1.save().then((res) =>{
//   console.log(res)
// }).catch((err) => {
//   console.log(err)
// });

app.get("/",(req,res) => {
    res.send("root is working")
});

app.listen(8080, () => {
    console.log("App is listning on port 8080")
})