const express = require('express');
const app = express();

// Liste des endpoints pour l'application
app.get('/', (req, res) => { // Afficher 'Hello World' en haut de la page
    res.send('Hello World !');
});

/* Endpoint pour accéder à la bibliothèque de l'application
app.get('/library', async (req, res) => {
    try {
        const library = await Library;
        res.status(200).json(library);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});*/

// Endpoint pour afficher toutes les musiques
app.get('/musics', async (req, res) => {
    try {
        //const musics = await Music.getAllMusics();
        res.send('Liste des musiques')
        //res.status(200).json(musics);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Endpoint pour afficher une musique spécifique
app.get('/musics/:id', async (req, res) => {
    //const id = parseInt(req.params.id)
    //const musics = musics.find(musics => musics.id === id);
    res.send('Musique')
})

// Endpoint pour afficher tous les podcasts
app.get('/podcasts', async (req, res) => {
    try {
        //const podcasts = await Podcast.getAllPodcasts();
        //res.status(200).json(podcasts);
        res.send('Liste des podcasts')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Endpoint pour afficher un podcast spécifique
app.get('/pocasts/:id', async (req, res) => {
    //const id = parseInt(req.params.id)
    //const podcasts = podcasts.find(podcasts => podcasts.id === id);
    res.send('Podcast')
})

// Endpoint pour afficher tous les livres audio
app.get('/books', async (req, res) => {
    try {
        //const books = await LivreAudio.getAllBooks();
        //res.status(200).json(books);
        res.send('Liste des livres audio')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Endpoint pour afficher un livre audio spécifique
app.get('/books/:id', async (req, res) => {
    //const id = parseInt(req.params.id)
    //const books = books.find(books => books.id === id);
    res.send('Livre audio ')
})

// Endpoint pour afficher tous les concerts
app.get('/concerts', async (req, res) => {
    try {
        //const concerts = await Concert.getAllGigs();
        //res.status(200).json(concerts);
        res.send('Liste des concerts')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Endpoint pour afficher un concert spécifique
app.get('/concerts/:id', async (req, res) => {
    //const id = parseInt(req.params.id)
    //const concerts = concerts.find(concerts => concerts.id === id);
    res.send('Concert')
})

// Endpoint pour afficher toutes les albums
app.get('/albums', async (req, res) => {
    try {
        //const albums = await Playlist.getAllAlbums();
        //res.status(200).json(albums);
        res.send('Liste des albums')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Endpoint pour afficher un album spécifique
app.get('/albums/:id', async (req, res) => {
    //const id = parseInt(req.params.id)
    //const albums = albums.find(albums => albums.id === id);
    res.send('Album')
})

// Définition d'un port d'écoute
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Le serveur a été lancé sur le port ${PORT} !`);
});

// Endpoints pour les artistes

// Ajout d'une nouvelle musique
app.post('/musics/add', async (req, res) => {
    // musics.push(req.body);
    // res.status(200).json(musics);
})

// Suppression d'une musique
app.delete('/musics/:id/remove', async (req, res) => {
    // const id = parseInt(req.params.id);
    // let music = musics.find(music => music.id === id);
    // musics.splice(musics.indexOf(music), 1);
    // res.status(200).json(musics);
})

// Ajout d'un nouveau podcast
app.post('/podcasts/add', async (req, res) => {
    // podcasts.push(req.body);
    // res.status(200).json(podcasts);
})

// Suppression d'un podcast
app.delete('/podcasts/:id/remove', async (req, res) => {
    // const id = parseInt(req.params.id);
    // let podcast = podcasts.find(podcast => podcast.id === id);
    // podcasts.splice(podcasts.indexOf(podcast), 1);
    // res.status(200).json(podcasts);
})

// Ajout d'un nouveau livre audio
app.post('/books/add', async (req, res) => {
    // books.push(req.body);
    // res.status(200).json(books);
})

// Suppression d'un livre audio
app.delete('/books/:id/remove', async (req, res) => {
    // const id = parseInt(req.params.id);
    // let book = books.find(book => book.id === id);
    // books.splice(books.indexOf(book), 1);
    // res.status(200).json(books);
})

// Ajout d'un nouveau concert
app.post('/concerts/add', async (req, res) => {
    // concerts.push(req.body);
    // res.status(200).json(concerts);
})

// Suppression d'un concert
app.delete('/concerts/:id/remove', async (req, res) => {
    // const id = parseInt(req.params.id);
    // let concert = concerts.find(concert => concert.id === id);
    // concerts.splice(concerts.indexOf(concert), 1);
    // res.status(200).json(concerts);
})

// Ajout d'un nouveau album
app.post('/albums/add', async (req, res) => {
    // albums.push(req.body);
    // res.status(200).json(albums);
})

// Suppression d'un album
app.delete('/albums/:id/remove', async (req, res) => {
    // const id = parseInt(req.params.id);
    // let album = albums.find(album => album.id === id);
    // albums.splice(albums.indexOf(album), 1);
    // res.status(200).json(albums);
})