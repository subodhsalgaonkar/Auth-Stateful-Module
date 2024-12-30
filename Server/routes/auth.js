import { Router } from 'express';
import {handleLogin, handleSignup} from '../controllers/auth.js'

const router = Router()

router.post('/login',handleLogin);
router.post('/signup', handleSignup);

export default router