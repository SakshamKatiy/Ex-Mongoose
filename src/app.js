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
// const createDocument = async()=>{
// try{
// const htmlPlaylist = new playlist({
//     name:"html",
//     ctype:"front end",
//     videos:1,
//     author:"Saksham",
//     active:true
// });

// const cssPlaylist = new playlist({
//     name:"CSS",
//     ctype:"front end",
//     videos:2,
//     author:"Saksham",
//     active:true
// });

// const jsPlaylist = new playlist({
//     name:"js",
//     ctype:"front end",
//     videos:3,
//     author:"Saksham",
//     active:true
// });
// const result = await playlist.insertMany([jsPlaylist,htmlPlaylist,cssPlaylist]);
// console.log(result);
// }catch(err){
// console.log(err);
// }
// }
// createDocument();


// create Document();
// const getDocument = async()=>{
    //try{
//     const result = await playlist.find({ctype:"font end"})
//     .select({name:1})
//     .limit(1)
//     console.log(result);
// }catch(err){
// console.log(err);
//}
//}


// comparison operator

const getDocument = async()=>{
    try{
    const result = await playlist.find({videos:{$gt : 10}})
    .select({name:1})
    //.limit(1)
    console.log(result);
}catch(err){
console.log(err);
}
}
getDocument();

// comparison operator
//.find({$or:[{ctype:"angular"}{
// author:"node js"
//}]})

// .countDocuments(); to count the document
// .sort({name:-1}); to reverse the result


// update document
// const updateDocument = async(_id)=>{
//     try{
//         const result = await playlist.updateOne({_id},{
//             $set : {
//         name:"adit"
//             }
//          }   );
//         console.log(result);
//     }catch(error){
//         console.log(err);

//     }
// }
const updateDocument = async(_id)=>{
    try{
        const result = await playlist.findByIdAndUpdate({_id},{
            $set : {
        name:"adit trade"
            }
         }   );
        console.log(result);
    }catch(error){
        console.log(err);

    }
}
updateDocument('65b9d874f2411ab1f19c88ea');



// deleteDocument

const deleteDocument=async(_id)=>{
    try{
        const result = await playlist.findByIdAndDelete({_id });
    }catch(err){
        console.log(err)
    }
    
}
deleteDocument('65b9d874f2411ab1f19c88ea');