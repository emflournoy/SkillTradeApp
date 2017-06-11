// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/skilbuild'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABSE_URL
  }

};
