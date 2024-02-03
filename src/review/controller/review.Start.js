import { reviewsModel } from "../../../DB/models/Review.model.js"

export const Create = async (req,res,next)=>{
    try{
     const revCreate =   await reviewsModel.create(req.body)
     res.json(revCreate)
    }
    catch{
        res.send ("Error")
    }
}


export const Edit = async (req,res,next)=>{
    try{
     const {UserID , id ,Review } = req.body;
     const revCreate =   await reviewsModel.findById(id)
    if(!revCreate){
        return res.json ('review not found');
    }

    if(revCreate.UserID != UserID){
        return res.send("User Can't Edit This");
    }

    revCreate.Review = Review;

   await revCreate.save()



     res.json(revCreate);
    }
    catch{
        res.send ("Error")
    }
}


export const Delete = async (req,res,next)=>{
    try{
     const {UserID , id  } = req.body;
     const revCreate =   await reviewsModel.findById(id)
    if(!revCreate){
        return res.json ('review not found');
    }

    if(revCreate.UserID != UserID){
        return res.send("User Can't Delete This");
    }

    await reviewsModel.deleteOne({_id: id});

     res.json('Done');
    }
    catch{
        res.send ("Error")
    }
}