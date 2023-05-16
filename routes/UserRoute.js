import express from 'express';
import UserModel from '../models/UserModel.js';

const router = express.Router();

router.use('/', UserModel);

export default router;
