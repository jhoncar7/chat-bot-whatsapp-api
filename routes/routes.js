import { Router } from 'express';
import { VerifyToken, ReceivedMessage } from '../controllers/whatsappControllers.js';

const router = Router();

router.get('/', VerifyToken);
router.post('/', ReceivedMessage);

export default router;