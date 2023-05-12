//todo: calling pattern
/* 
    app.ts-->Route calling --> controller calling -->service
*/

import express from 'express';
import { getUsers, createUser, getUserById } from './user.controller';

const router =express.Router();

router.get('/',getUsers);
router.get('/:id',getUserById);
router.post('/create-user',createUser);

export default router;