import {Schema, model} from "mongoose";


const UserSchema = Schema(
    {   firstName : String ,
        lastName : String ,
        userName : { 
            type : String,
            required :[true ,'UserName is required'] ,
            min:[2,'min length 2 char'],
            max:[20,'max length 20 char'],
        },
        email:{
            type : String,
            required :[true ,'Email must be typed'] ,
            unique : [true ,'Email must be unique']
                },
        password:{
                    type : String,
                    required :[true ,'password must be typed'] ,
            },


        gender : {
            String,
            enum:['male','female']
        },

    }
);


export const UserModel = model('User', UserSchema);

