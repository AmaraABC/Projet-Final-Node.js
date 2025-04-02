const { Pool } = require("pg");
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

class Ticket {
    // Retourner tous les tickets
    static async getAllTickets() {
        const result = await pool.query('SELECT * FROM ticket');
        return result.rows;
    }

    // Récupérer un ticket
    static async getTicketById(id) {
        const result = await pool.query('SELECT * FROM ticket WHERE id_ticket = $1', [id]);
        return result.rows[0];
    }

    // Ajouter un ticket
    static async addTicket({ titre, contenu }) {
        const result = await pool.query(
            'INSERT INTO ticket(titre, contenu) VALUES ($1, $2) RETURNING *', [titre, contenu]
        );
        return result.rows[0];
    }

    // Supprimer un ticket
    static async deleteTicket(id) {
        const result = await pool.query('DELETE FROM ticket WHERE id_ticket = $1', [id]);
    }
};

module.exports = Ticket;