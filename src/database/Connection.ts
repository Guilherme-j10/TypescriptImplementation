import knex from 'knex';
export const connection = knex({
  client: 'mysql2',
  connection: {
    database: 'tsbank',
    user: 'root',
    password: '',
    host: 'localhost'
  },
});
