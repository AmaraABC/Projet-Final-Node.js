const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

class Concert {
    // Retourner tous les concerts
    static async getAllConcerts() {
        const result = await pool.query('SELECT * FROM concert');
        return result.rows;
    }

    // Récupérer un concert
    static async getConcertById(id) {
        const result = await pool.query('SELECT * FROM concert WHERE id_concert = $1', [id]);
        return result.rows[0];
    }

    // Récupérer des concerts en fonction d'un genre
    static async getConcertsByGenre(genre) {
        const result = await pool.query('SELECT * FROM concert WHERE genre = $1', [id]);
        return result.rows[0];
    }

    // Ajouter un concert
    static async addConcert({ nom, contenu, genre, artiste, duree }) {
        const result = await pool.query(
            'INSERT INTO concert(nom, contenu, genre, artiste, duree) VALUES ($1, $2, $3, $4, $5) RETURNING *', [nom, contenu, genre, artiste, duree]
        );
        return result.rows[0];
    }

    // Supprimer un concert
    static async deleteConcert(id) {
        const result = await pool.query('DELETE FROM concert WHERE id_concert = $1', [id]);
    }
};

module.exports = Concert;