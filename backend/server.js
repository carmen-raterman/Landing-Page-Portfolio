const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//model imports
const User = require('./models/User');
const Review = require('./models/Review');
const Practitioner = require('./models/Practitioner');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());

//we need the middleware to parse json
app.use(express.json());


//now for connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB is connected'))
.catch(err => console.log('Could not connect to MongoDB', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//adding routes
app.get('/api/practitioners', async (req, res) => {
    try {
        const practitioners = await Practitioner.find().populate('reviews');
        res.json(practitioners);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/reviews', async (req, res) => {
    const { practitionerId, userId, rating, comment } = req.body;
    const review = new Review({
        practitionerId,
        userId,
        rating,
        comment
    });
    try {
        const savedReview = await review.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});