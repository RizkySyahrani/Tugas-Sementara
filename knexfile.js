module.exports = {
  development: {
    client: "pg", // Atau mysql, sqlite3, dll.
    connection: {
      host: "127.0.0.1",
      user: "your_database_user",
      password: "your_database_password",
      database: "your_database_name",
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL, // Gunakan variabel lingkungan untuk produksi
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
