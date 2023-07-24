// this file is for connecting server to mongo database using mongoose
import mongoose from "mongoose";

export async function connectToDatabase() { // i need to call this funciton everytime i want to connect to database
    try{
        console.log("Control is in ConnectToDatabase TRY BLOCK in dbConfig")
        mongoose.connect(process.env.MONGO_URL!)
        // in typescript ! this denotes that programmer will take care of it, it will always available
        // in typescript ? this denotes that TypeScript will take care of it, it may be  available or not
        const connection= mongoose.connection;
        // now this connection has variety of events like below connection.on .on gets two argument 1st info and 2nd one is callback
        connection.on('connected',()=>{
            console.log("MONGODB is Connected Successfully")
        })
        connection.on('error',(err)=>{
            console.log("Error During Connecting TO Database :", err)
            process.exit(); // this exit the control 
        })
    }
    catch (err){
        console.log("Control is in ConnectToDatabase ERROR BLOCK in dbConfig")
        console.log("HERE IS ERRROR :", err)
    }
}