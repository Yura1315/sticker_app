import { DataSource } from "typeorm";

export default new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'developer',
  password: 'dev',
  database: 'storage',
  synchronize: false,
  cache: false,
  entities: [ 'models/database/entity/**/*.ts' ],
  migrations: [ 'models/database/migrations/**/*.ts' ]
});