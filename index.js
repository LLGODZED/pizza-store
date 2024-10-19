const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


const pizzaRoutes = require('./routes/pizzaRoute');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/pizzas', pizzaRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/pizzadetails', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pizzadetails.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});