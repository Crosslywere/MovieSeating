const mongoose = require('mongoose');

const DBconnection = async()=>{
    try{
        //MongoDb string connection
        mongoose.set("strictQuery",false);
        const con = mongoose.connect(process.env.DB_URI, ()=>{
            console.log("MongoDB connected")
        });
    }catch(err){
        //Print error
        console.log(err);
        process.exit(1);
    }
}



module.exports = DBconnection;