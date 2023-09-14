const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://kylepotteiger:@Kylep604@mythic-database.gnmdlxp.mongodb.net/?retryWrites=true&w=majority'; // Replace with your connection string
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Could not connect to MongoDB Atlas:', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
