const mongoose = require("mongoose");
const chat = require("./models/chat");


main().then(() =>{
     console.log("connection successful")
})
.catch((err) => {console.log(err)});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats = [
    {
        from:"kunal",
        To:"rushi",
        message:"hi, how are you",
        created_at:new Date,
    },
{
    from:"ram",
    To:"sham",
    message:"hi, what are you",
    created_at:new Date,
},
{
    from:"rohit",
    To:"aaditya",
     message:"hi, where are you",
     created_at:new Date,
}]

chat.insertMany(chats);
