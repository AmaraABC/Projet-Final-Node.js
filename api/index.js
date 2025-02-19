const express = require('express');
const app = express();

// Liste des endpoints pour l'application
app.get('/', (req, res) => { // Afficher 'Hello World' en haut de la page
    res.send('Hello World !');
});

// Endpoints pour afficher toutes les musiques
app.get('/musics', async (req, res) => {
    try {
        const musics = await Music.getAllMusics();
        res.status(200).json(musics);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Endpoints pour afficher tous les podcasts
app.get('/podcasts', async (req, res) => {
    try {
        const podcasts = await Podcast.getAllPodcasts();
        res.status(200).json(podcasts);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Endpoints pour afficher tous les playlists
app.get('/playlists', async (req, res) => {
    try {
        const playlists = await Playlist.getAllPlaylists();
        res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Définition d'un port d'écoute
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Le serveur a été lancé sur le port ${PORT} !`);
});