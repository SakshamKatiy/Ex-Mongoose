const mongoose = require("mongoose");
const express = require("express");

app= express();
port = 3000;
app.listen(port,()=>{`server is running on ${port}`});
mongoose.connect("mongodb://localhost:27017/expressData").then(()=>{
    console.log("connected successfully");
}).catch((error)=>
    console.log(error));


    const playlistSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        ctype:String,
        videos:Number,
        author:String,
        active:Boolean,
        date:{
            type:Date,
            default:Date.now
        }
    });

    // create collection
const playlist = new mongoose.model("playlist",playlistSchema);

// create document or insert
const createDocument = async()=>{
try{
    const newPlaylist = new playlist({
        name:"Node js",
        ctype:"Backend",
        videos:50,
        author:"Saksham",
        active:true
    });
    
    const result = await newPlaylist.save()
    console.log(result);
}catch(err){
    console.log(err);
}
}
createDocument();

