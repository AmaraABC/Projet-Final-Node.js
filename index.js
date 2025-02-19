const express = require('express');
const app = express();

// Liste des endpoints pour l'application
app.get('/', (req, res) => { // Afficher 'Hello World' en haut de la page
    res.send('Hello World !');
});

// Définition d'un port d'écoute
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Le serveur a été lancé sur le port ${PORT} !`);
});