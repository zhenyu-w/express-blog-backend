module.exports = {
  allowClient: ["localhost:3000", "127.0.0.1:3000"],
  mysql: {
    host: "localhost",
    port: "3306",
    user: "root",
    // password: "Wzy5665001!",
    password: "123456",
    database: "vue3_blog",
    multipleStatements: true,
    waitForConnections: true,
    charset: "UTF8MB4_UNICODE_CI",
  },
};
