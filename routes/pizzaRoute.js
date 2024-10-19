const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../pizza.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Unable to read JSON file.' });
        }
        try {
            const pizzas = JSON.parse(data);
            res.status(200).json(pizzas);
        } catch (parseErr) {
            res.status(500).json({ message: 'Error parsing JSON data.' });
        }
    });
});

router.get('/:id', (req, res) => {
    const pizzaId = req.params.id;
    const filePath = path.join(__dirname, '../pizza.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Unable to read JSON file.' });
        }
        try {
            const pizzas = JSON.parse(data);
            const pizza = pizzas.find(p => p.id == pizzaId);
            if (pizza) {
                res.status(200).json(pizza);
            } else {
                res.status(404).json({ message: 'Pizza not found.' });
            }
        } catch (parseErr) {
            res.status(500).json({ message: 'Error parsing JSON data.' });
        }
    });
});

module.exports = router;