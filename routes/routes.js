import { Router } from 'express';
import { VerifyToken, ReceivedMessage } from '../controllers/whatsappControllers.js';

// const express = require('express');
// const { VerifyToken, ReceivedMessage } = require('../controllers/whatsappControllers');
// const router = express.Router();
const router = Router();

router.get('/', VerifyToken);
router.post('/', ReceivedMessage);

// module.exports = router;
export default router;