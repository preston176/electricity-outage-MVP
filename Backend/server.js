const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://prestonnyamweya:mayieka1212@powerwatch.kmknuet.mongodb.net/?retryWrites=true&w=majority&appName=powerwatch', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const OutageSchema = new mongoose.Schema({
    name: String,
    location: String,
    status: String,
    latitude: Number,
    longitude: Number
});

const Outage = mongoose.model('Outage', OutageSchema);

// Routes
app.get('/outages', async (req, res) => {
    try {
        const outages = await Outage.find();
        res.json(outages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/outages', async (req, res) => {
    const outage = new Outage(req.body);
    try {
        const newOutage = await outage.save();
        res.status(201).json(newOutage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
