import  {  model , Schema } from "mongoose";

const bookSchema = new Schema({
    title:{
        type:String,
        unique : true ,
        required : true
},
ISBN:{
    type:Number,
    unique : true ,
    
    required : true
},
Author:{
    type:String,
    required : true
},

},{
    timestamps:true
});



export const booksModel = model('Book' , bookSchema);