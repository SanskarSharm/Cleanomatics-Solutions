const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/a', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'a.html'));
});

app.get('/b', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'b.html'));
});

app.get('/c', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'c.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
