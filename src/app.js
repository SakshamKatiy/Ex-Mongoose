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

    // 
// const playlist = new mongoose.model("playlist",playlistSchema);

// // create document or insert
// const createDocument = async()=>{
// try{
//     const newPlaylist = new playlist({
//         name:"Node js",
//         ctype:"Backend",
//         videos:50,
//         author:"Saksham",
//         active:true
//     });
    
//     const result = await newPlaylist.save()
//     console.log(result);
// }catch(err){
//     console.log(err);
// }
// }
// createDocument();



//   Inserting multiple documents---------
const playlist = new mongoose.model("playlist",playlistSchema);

// create document or insert
const createDocument = async()=>{
try{
const htmlPlaylist = new playlist({
    name:"html",
    ctype:"front end",
    videos:1,
    author:"Saksham",
    active:true
});

const cssPlaylist = new playlist({
    name:"CSS",
    ctype:"front end",
    videos:2,
    author:"Saksham",
    active:true
});

const jsPlaylist = new playlist({
    name:"js",
    ctype:"front end",
    videos:3,
    author:"Saksham",
    active:true
});
const result = await playlist.insertMany([jsPlaylist,htmlPlaylist,cssPlaylist]);
console.log(result);
}catch(err){
console.log(err);
}
}
createDocument();


// create Document();
const getDocument = async()=>{
    const result = await playlist.find({ctype:"font end"})
    .select({name:1})
    .limit(1)
    console.log();
}
getDocument();