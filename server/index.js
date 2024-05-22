// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/travelopia', { useNewUrlParser: true, useUnifiedTopology: true });

const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  tripPreferences: String
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

app.post('/enquiries', (req, res) => {
  const newEnquiry = new Enquiry(req.body);
  newEnquiry.save()
    .then(enquiry => res.status(201).json(enquiry))
    .catch(err => res.status(400).json(err));
});

app.get('/enquiries', (req, res) => {
  Enquiry.find()
    .then(enquiries => res.json(enquiries))
    .catch(err => res.status(400).json(err));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
