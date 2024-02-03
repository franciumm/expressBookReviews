import mongoose from "mongoose";

const DBConnect =  async ()=>{
    return await mongoose.connect('mongodb+srv://Joe:2512@cluster0.s7mmsgt.mongodb.net/').then(console.log('DB Connected'));
}


export default DBConnect;