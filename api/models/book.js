const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

class Book {
    // Retourner tous les livres audio
    static async getAllBooks() {
        const result = await pool.query('SELECT * FROM livre');
        return result.rows;
    }

    // Récupérer un livre audio
    static async getBookById(id) {
        const result = await pool.query('SELECT * FROM livre WHERE id_livre = $1', [id]);
        return result.rows[0];
    }

    // Ajouter un livre audio
    static async addBook({ nom, contenu, genre, artiste, duree }) {
        const result = await pool.query(
            'INSERT INTO book(nom, contenu, genre, artiste, duree) VALUES ($1, $2, $3, $4, $5) RETURNING *', [nom, contenu, genre, artiste, duree]
        );
        return result.rows[0];
    }

    // Supprimer un livre audio
    static async deleteBook(id) {
        const result = await pool.query('DELETE FROM book WHERE id_livre = $1', [id]);
    }
};

module.exports = Book;