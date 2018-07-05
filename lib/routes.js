const express = require('express');
const router = express.Router();

router.use('/books', require('./books/books.controller'));

module.exports = router;