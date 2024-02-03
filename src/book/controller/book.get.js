import { booksModel } from "../../../DB/models/books.model.js"


export const BookAll = async (req,res,next)=>{
    try{
        const books = await booksModel.find();
        res.json(books);
    }catch{
        res.send('error')
    }
}

export const BookByISBN = async (req,res,next)=>{
    try{
        const {ISBN} = req.body
        const books = await booksModel.findOne({ISBN});
        res.json(books);
    }catch{  
              res.send('error')
}
}
export const BooksByAuthor = async (req,res,next) =>{

try{
    const { Author} = req.body;
    const books = await booksModel.find({Author: { $regex: '.*' + Author + '.*' } });
    res.json(books);
}
catch { 
    res.send('error')
}
}



export const BooksByTitle = async (req,res,next) =>{

    try{
        const { title} = req.body;
        const books = await booksModel.find({title: { $regex: '.*' + title + '.*' } });
        res.json(books);
    }
    catch { 
        res.send('error')
    }
    }