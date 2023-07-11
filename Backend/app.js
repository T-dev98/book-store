const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router)// localhost:5000/books

mongoose.connect(
    "mongodb+srv://admin:BTPGz9P2Pq7YZZby@cluster0.707ftj4.mongodb.net/bookStore?retryWrites=true&w=majority"
    )
    .then(()=>console.log("Connected To Database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));

//BTPGz9P2Pq7YZZby