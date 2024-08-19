// models/bookModel.js
const knex = require("knex")(require("../knexfile").development);

class BookModel {
  static async getAllBooks() {
    try {
      return await knex("books").select("*");
    } catch (err) {
      throw new Error("Error fetching books: " + err.message);
    }
  }

  static async getBookById(id) {
    try {
      return await knex("books").where({ id }).first();
    } catch (err) {
      throw new Error("Error fetching book: " + err.message);
    }
  }

  static async createBook(data) {
    try {
      const [id] = await knex("books").insert(data).returning("id");
      return id;
    } catch (err) {
      throw new Error("Error creating book: " + err.message);
    }
  }

  static async updateBook(id, data) {
    try {
      await knex("books").where({ id }).update(data);
    } catch (err) {
      throw new Error("Error updating book: " + err.message);
    }
  }

  static async deleteBook(id) {
    try {
      await knex("books").where({ id }).del();
    } catch (err) {
      throw new Error("Error deleting book: " + err.message);
    }
  }
}

module.exports = BookModel;
