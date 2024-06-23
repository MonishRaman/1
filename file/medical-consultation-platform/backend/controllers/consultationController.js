const Consultation = require('../models/Consultation');

const createConsultation = async (req, res) => {
  const { specialist, patientInfo } = req.body;

  const consultation = await Consultation.create({
    doctor: req.user._id,
    specialist,
    patientInfo,
  });

  if (consultation) {
    res.status(201).json(consultation);
  } else {
    res.status(400).json({ message: 'Invalid consultation data' });
  }
};

const getConsultations = async (req, res) => {
  const consultations = await Consultation.find({ doctor: req.user._id }).populate('specialist', 'name email');
  res.json(consultations);
};

module.exports = { createConsultation, getConsultations };
