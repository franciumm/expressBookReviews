import {Router} from 'express';
import * as UserStart from './controller/Userr.Start.js'

const router = Router ();

router.post ('/signup',UserStart.Signup);
router.post('/login',UserStart.Login );
export default router;