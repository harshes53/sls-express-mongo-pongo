const express = require('express');
const bookRoutes = express.Router();

const Book = require('./book');

bookRoutes
    .post('/', async (req, res, next) => {
        const book = await Book.create(req.body);
        res.status(200).send(book);
    })
    .put('/:id', async (req, res, next) => {
        const book = await Book.findOneAndUpdate(req.params.id, { $set: req.body }, { $upsert: true, new: true });
        res.status(200).send(book);
    })
    .get('/', async (req, res, next) => {
        const book = await Book.find();
        res.status(200).send(book);
    })
    .get('/:id', async (req, res, next) => {
        const book = await Book.findById(req.params.id);
        res.status(200).send(book);
    })
    .delete('/:id', async (req, res, next) => {
        const deletedBook = await Book.deleteOne({ _id: req.params.id });
        res.status(200).send(deletedBook);
    });

module.exports = bookRoutes;