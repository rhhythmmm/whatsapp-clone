import express from 'express';
const router = express.Router();

import messageController from '../controllers/message.js';

router.post('/messages/new', messageController.addMessage);
router.get('/messages/sync', messageController.sync);

export default router;