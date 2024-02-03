import {Router} from 'express';
import * as BooksGet from './controller/book.get.js'
const router = Router ();

router.get('/all',BooksGet.BookAll);
router.get('/ISBN',BooksGet.BookByISBN);
router.get('/author',BooksGet.BooksByAuthor);
router.get('/title',BooksGet.BooksByTitle)
export default router;