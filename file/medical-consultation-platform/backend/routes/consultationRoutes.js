const express = require('express');
const { createConsultation, getConsultations } = require('../controllers/consultationController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createConsultation).get(protect, getConsultations);

module.exports = router;
