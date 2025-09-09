// server.js
const express = require('express');
const cors = require('cors');
const PORT = 4000;
const app = express();

const router = require('./routes/serverRouter');

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api', router);  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
