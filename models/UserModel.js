import express from 'express';
import * as UserController from '../controllers/UserController.js';

const router = express.Router();

router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users', UserController.createUser);
router.patch('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

export default router;
