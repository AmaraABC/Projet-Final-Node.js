const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

class Album {
    // Retourner tous les albums
    static async getAllAlbums() {
        const result = await pool.query('SELECT * FROM album');
        return result.rows;
    }

    // Récupérer un album
    static async getAlbumById(id) {
        const result = await pool.query('SELECT * FROM album WHERE id_album = $1', [id]);
        return result.rows[0];
    }

    // Récupérer des albums en fonction d'un genre
    static async getAlbumsByGenre(genre) {
        const result = await pool.query('SELECT * FROM album WHERE genre = $1', [genre]);
        return result.rows[0];
    }

    // Ajouter un album
    static async addAlbum({ nom, contenu, genre, artiste, duree }) {
        const result = await pool.query(
            'INSERT INTO album(nom, contenu, genre, artiste, duree) VALUES ($1, $2, $3, $4, $5) RETURNING *', [nom, contenu, genre, artiste, duree]
        );
        return result.rows[0];
    }

    // Supprimer un album
    static async deleteAlbum(id) {
        const result = await pool.query('DELETE FROM album WHERE id_album = $1', [id]);
    }
};

module.exports = Album;