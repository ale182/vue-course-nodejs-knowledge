module.exports = {
    client: 'postgresql',
    connection: {
        database: 'knowledge',
        user: 'user1',
        password: 'test1'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};
