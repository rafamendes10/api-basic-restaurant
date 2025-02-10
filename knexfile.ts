export default {
  client: "sqlite3",
  connection: {
    filename: "./src/database/database.db" // -> onde vai ser criando o banco de dados
  },
  pool: {
    afterCreate: (connection: any, done: any) => {
      connection.run("PRAGMA foreign_keys = ON")
      done()
    }
  },
  useNullasDefault: true,
  migrations: {
    extension: "ts",
    directory: "./src/database/migrations" // -> para onde vai ficar as migrations
  },
  
  seeds: {
    extensions: "ts",
    directory: "./src/database/seeds"
  }
}