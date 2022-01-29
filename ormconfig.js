require('dotenv').config();
require('reflect-metadata')

console.log(__dirname + '/migrations')

module.exports = [
  {
    name: 'local',
    type: 'sqlite',
    database: './data/web-shop.sq3',
    entities: [__dirname + '/src/models/*.ts'],
    migrationsTableName: 'migration',
    migrations: [__dirname + '/src/migrations/*.ts'],
    cli: {
      entitiesDir: __dirname + '/src/app',
      migrationsDir: __dirname + '/src/migrations',
    },
  }
];
