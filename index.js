const express = require('express');
const app = express();

// Liste des endpoints pour l'application

// Simulation / débogage
app.get('/', (req, res) => {
    res.send('Hello World !');
});

// Définition d'un port d'écoute
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Le serveur a été lancé sur le port ${PORT} !`);
});