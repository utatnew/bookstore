const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const jsonFilePath = './src/assets/books.json'; // Replace with your JSON file path
const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/assets/books.json', jsonParser, (req, res) => {
  const { title, author, publicationDate } = req.body;
  fs.readFile(jsonFilePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else {
      const books = JSON.parse(data);
      const newBook = {
        id: books.length + 1,
        title,
        author,
        publicationDate
      };
      books.push(newBook);
      fs.writeFile(jsonFilePath, JSON.stringify(books), err => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal server error');
        } else {
          res.status(201).json(newBook);
        }
      });
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
