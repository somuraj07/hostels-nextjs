import mongoose from "mongoose";
import { Coming_Soon } from "next/font/google";

let initialized = false;


export const connect = async () =>{
mongoose.set('strictQuery', true);

if(initialized) {
    console.log('Mongodb alraedy connected');
    return;
}
try{
    await mongoose.connect(process.env.MONGODB_URL,{
        dbName: 'hostel-estate',
        useNewUrlParse: true,
        useUnifiedTopology: true,
        });
        initialized = true;
        console.log('mongodb connected');
}catch(error){
console.log('mongodb connection error',error);
};


}