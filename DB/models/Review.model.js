import  {  model , Schema } from "mongoose";

const ReviewSchema = new Schema({
    UserID:{
        type : Schema.Types.ObjectId,
        
        required : true
},
Review:{
    type:String,
    required : true
},
BookID:{
    type : Schema.Types.ObjectId,
    required : true
},

},{
    timestamps:true
});



export const reviewsModel = model('Review' , ReviewSchema);