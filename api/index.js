const express = require('express');
const Book = require('./models/book');
const Music = require('./models/music');
const Podcast = require('./models/podcast');
const Album = require('./models/album');
const Concert = require('./models/concert');
const Ticket = require('./models/ticket');
require('dotenv').config();
const app = express();

// Liste des endpoints pour l'application
app.get('/', (req, res) => { // Afficher 'Hello World' en haut de la page
    res.send('Hello World !');
});

// Endpoints (musiques)
app.get('/library/musics', async (req, res) => {
    try {
        const musics = await Music.getAllMusics();
        res.status(200).json(musics);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.get('/library/musics/:id', async (req, res) => {
    try {
        const music = await Music.getMusicById(req.params.id);
        music ? res.status(200).json(music) : res.status(404).json('Musique non présente');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/library/musics/:genre', async (req, res) => {
    try {
        const music = await Music.getMusicsByGenre(req.params.genre);
        music ? res.status(200).json(music) : res.status(404).json('Musiques non présentes');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/musics/add', async (req, res) => {
    try {
        const newMusic = await Music.addMusic(req.body);
        res.status(201).json(newMusic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/musics/delete/:id', async (req, res) => {
    try {
        const deletedMusic = await Music.deleteMusic(req.params.id);
        res.status(204).json(deletedMusic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// Endpoints (podcasts)
app.get('/library/podcasts', async (req, res) => {
    try {
        const podcasts = await Podcast.getAllPodcasts();
        res.status(200).json(podcasts);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.get('/library/podcasts/:id', async (req, res) => {
    try {
        const podcast = await Podcast.getPodcastById(req.params.id);
        podcast ? res.status(200).json(podcast) : res.status(404).json('Podcast non présent');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/library/podcasts/:genre', async (req, res) => {
    try {
        const podcast = await Podcast.getPodcastsByGenre(req.params.genre);
        podcast ? res.status(200).json(podcast) : res.status(404).json('Podcasts non présents');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/podcasts/add', async (req, res) => {
    try {
        const newPodcast = await Podcast.addPodcast(req.body);
        res.status(201).json(newPodcast);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/podcasts/delete/:id', async (req, res) => {
    try {
        const deletedPodcast = await Podcast.deletePodcast(req.params.id);
        res.status(204).json(deletedPodcast);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// Endpoints (livres audio)
app.get('/library/books', async (req, res) => {
    try {
        const books = await Book.getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.get('/library/books/:id', async (req, res) => {
    try {
        const book = await Book.getBookById(req.params.id);
        book ? res.status(200).json(book) : res.status(404).json('Livre non présent');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/library/books/:genre', async (req, res) => {
    try {
        const book = await Book.getBooksByGenre(req.params.genre);
        book ? res.status(200).json(book) : res.status(404).json('Livres non présents');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/books/add', async (req, res) => {
    try {
        const newBook = await Book.addBook(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/books/delete/:id', async (req, res) => {
    try {
        const deletedBook = await Book.deleteBook(req.params.id);
        res.status(204).json(deletedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// Endpoints (albums)
app.get('/library/albums', async (req, res) => {
    try {
        const albums = await Album.getAllAlbums();
        res.status(200).json(albums);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.get('/library/albums/:id', async (req, res) => {
    try {
        const album = await Album.getAlbumById(req.params.id);
        album ? res.status(200).json(album) : res.status(404).json('Album inexistant');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/library/albums/:genre', async (req, res) => {
    try {
        const album = await Album.getAlbumsByGenre(req.params.genre);
        album ? res.status(200).json(album) : res.status(404).json('Albums inexistants');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/albums/add', async (req, res) => {
    try {
        const newAlbum = await Album.addAlbum(req.body);
        res.status(201).json(newAlbum);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/albums/delete/:id', async (req, res) => {
    try {
        const deletedAlbum = await Album.deleteAlbum(req.params.id);
        res.status(204).json(deletedAlbum);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// Endpoints (concerts)
app.get('/library/concerts', async (req, res) => {
    try {
        const concerts = await Concert.getAllConcerts();
        res.status(200).json(concerts);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.get('/library/concerts/:id', async (req, res) => {
    try {
        const concert = await Concert.getConcertById(req.params.id);
        concert ? res.status(200).json(concert) : res.status(404).json('Concert introuvable :<');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/library/concerts/:genre', async (req, res) => {
    try {
        const concert = await Concert.getConcertsByGenre(req.params.genre);
        concert ? res.status(200).json(concert) : res.status(404).json('Concerts introuvables :<');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/concerts/add', async (req, res) => {
    try {
        const newConcert = await Concert.addConcert(req.body);
        res.status(201).json(newConcert);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/concerts/delete/:id', async (req, res) => {
    try {
        const deletedConcert = await Concert.deleteConcert(req.params.id);
        res.status(204).json(deletedConcert);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// Endpoints (tickets SAV)
app.get('/tickets', async (req, res) => {
    try {
        const tickets = await Ticket.getAllTickets();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.get('/tickets/:id', async (req, res) => {
    try {
        const ticket = await Ticket.getTicketById(req.params.id);
        ticket ? res.status(200).json(ticket) : res.status(404).json('Ticket introuvable :<');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/tickets/add', async (req, res) => {
    try {
        const newTicket = await Ticket.addTicket(req.body);
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/tickets/delete/:id', async (req, res) => {
    try {
        const deletedTicket = await Ticket.deleteTicket(req.params.id);
        res.status(204).json(deletedTicket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

/*Endpoint pour accéder à la bibliothèque de l'application
app.get('/library', async (req, res) => {
    try {
        const library = await Library;
        res.status(200).json(library);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});*/


/* Endpoint pour publier un avis/commentaire
app.post('/comments/add', async (req, res) => {
    // comments.push(req.body);
    // res.status(200).json(comments);
});

// Endpoint pour afficher un utilisateur
app.get('users/:id', async (req, res) => {
    //const id = parseInt(req.params.id)
    //const users = uers.find(users => users.id === id);
    res.send('Utilisateur')
});

// Endpoint pour modifier le mot de passe d'un utilisateur
app.patch('users/:id/password/edit', async (req, res) => {

});

// Endpoint pour supprimer un utilisateur
app.delete('/users/:id/remove', async (req, res) => {
    // const id = parseInt(req.params.id);
    // let user = users.find(user => user.id === id);
    // users.splice(users.indexOf(user), 1);
    // res.status(200).json(users);
});*/

// Définition d'un port d'écoute
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Le serveur a été lancé sur le port ${PORT} !`);
});