import {Router} from 'express';
import * as ReviewGet from './controller/review.get.js'
import * as ReviewStart from './controller/review.Start.js'

const router = Router ();

router.get('/all',ReviewGet.AllReviews )
router.post('/create',ReviewStart.Create);
router.put('/edit',ReviewStart.Edit);
router.delete('/Del',ReviewStart.Delete);
export default router;