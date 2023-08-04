const express = require('express');
const { VerifyToken, ReceivedMessage } = require('../controllers/whatsappControllers');
const router = express.Router();

router.get('/',VerifyToken);
router.post('/',ReceivedMessage);

module.exports = router;