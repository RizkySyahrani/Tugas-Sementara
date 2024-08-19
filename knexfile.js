module.exports = {
  development: {
    client: "pg", // Atau mysql, sqlite3, dll.
    connection: {
      host: "127.0.0.1",
      user: "myuser", // Sesuai dengan POSTGRES_USER
      password: "mypassword", // Sesuai dengan POSTGRES_PASSWORD
      database: "mydatabase", // Sesuai dengan POSTGRES_DB
      port: 5432, // Port yang digunakan
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
