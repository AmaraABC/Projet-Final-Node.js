const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

class Music {
    // Retourner toutes les musiques
    static async getAllMusics() {
        const result = await pool.query('SELECT * FROM musique');
        return result.rows;
    }

    // Récupérer une musique
    static async getMusicById(id) {
        const result = await pool.query('SELECT * FROM musique WHERE id_musique = $1', [id]);
        return result.rows[0];
    }

    // Récupérer des musiques en fonction d'un genre
    static async getMusicsByGenre(genre) {
        const result = await pool.query('SELECT * FROM musique WHERE id_musique = $1', [genre]);
        return result.rows[0];
    }

    // Ajouter une musique
    static async addMusic({ nom, contenu, genre, artiste, duree }) {
        const result = await pool.query(
            'INSERT INTO musique(nom, contenu, genre, artiste, duree) VALUES ($1, $2, $3, $4, $5) RETURNING *', [nom, contenu, genre, artiste, duree]
        );
        return result.rows[0];
    }

    // Supprimer une musique
    static async deleteMusic(id) {
        const result = await pool.query('DELETE FROM musique WHERE id_musique = $1', [id]);
    }
};

module.exports = Music;