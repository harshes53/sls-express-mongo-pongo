const mongoose = require('mongoose');

mongoose
    .connect(process.env.DB)
    .catch((err) => {
        console.log(err.message);
    });