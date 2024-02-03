import DBConnect from '../DB/DB.connect.js';
import UserRouter from './user/user.router.js';
import BooksRouter from './book/book.router.js';
import ReviewsRouter from './review/review.router.js'
const bootstrape = async (app,express)=>{
    DBConnect();

app.use(express.json());
app.use('/user', UserRouter);
app.use('/books',BooksRouter );
app.use('/reviews',ReviewsRouter )
app.use('*',(req,res,next)=>{res.json("Invalid Routing")})
}


export default bootstrape;