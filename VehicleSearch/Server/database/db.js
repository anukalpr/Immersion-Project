const mongoose=require('mongoose');

const conn=async()=>{
    const DB_URI='mongodb+srv://anukalprajcs22:Anu%4062030@gmailclone.qaapz.mongodb.net/?retryWrites=true&w=majority&appName=gmailclone';
    try{
        await mongoose.connect(DB_URI,{

        })
        console.log("DataBase is connected Successfully");
    }
    catch(err){
        console.log(err);
    }
}
module.exports=conn;