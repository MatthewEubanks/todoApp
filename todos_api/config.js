exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/todo';
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || 'mongodb://localhost:8080/test-mobile-detail-app';
exports.PORT = process.env.PORT || 8000;
