import express from 'express';
import { getUsers, createUser } from './user.controller';

const router =express.Router();

router.get('/',getUsers);
router.post('/create-user',createUser);

export default router;