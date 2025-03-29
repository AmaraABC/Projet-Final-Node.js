const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

class Podcast {
    // Retourner tous les podcasts
    static async getAllPodcasts() {
        const result = await pool.query('SELECT * FROM podcast');
        return result.rows;
    }

    // Récupérer un podcast
    static async getPodcastById(id) {
        const result = await pool.query('SELECT * FROM livre WHERE id_podcast = $1', [id]);
        return result.rows[0];
    }

    // Ajouter un podcast
    static async addPodcast({ nom, contenu, genre, artiste, duree }) {
        const result = await pool.query(
            'INSERT INTO podcast(nom, contenu, genre, artiste, duree) VALUES ($1, $2, $3, $4, $5) RETURNING *', [nom, contenu, genre, artiste, duree]
        );
        return result.rows[0];
    }

    // Supprimer un podcast
    static async deletePodcast(id) {
        const result = await pool.query('DELETE FROM book WHERE id_podcast = $1', [id]);
    }
};

module.exports = Podcast;