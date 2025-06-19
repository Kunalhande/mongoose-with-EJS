const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        require:true,
    },
    To:{
        type:String,
         require:true,
    },
    message:{
        type:String,
        maxLength:50,
    },
    created_at:{
        type:Date,
         require:true,
    }
    
});

const chat = mongoose.model("chat",chatSchema);

module.exports = chat;