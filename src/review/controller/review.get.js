import {reviewsModel} from '../../../DB/models/Review.model.js'


export const AllReviews= async (req,res,next ) =>{
    try{
const revs = await reviewsModel.find();
res.json(revs);
    }
    catch{
res.send('error')
    }
} 