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

// Endpoints pour afficher tous les livres audio
app.get('/books', async (req, res) => {
    try {
        const books = await LivreAudio.getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Endpoints pour afficher tous les concerts
app.get('/concerts', async (req, res) => {
    try {
        const concerts = await Concert.getAllGigs();
        res.status(200).json(concerts);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Endpoints pour afficher toutes les albums
app.get('/albums', async (req, res) => {
    try {
        const albums = await Playlist.getAllAlbums();
        res.status(200).json(albums);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Définition d'un port d'écoute
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Le serveur a été lancé sur le port ${PORT} !`);
});