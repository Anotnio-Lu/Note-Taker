const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


// GET Route for note page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './notes.html'))
);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './index.html'))
);


app.listen(PORT, () =>
  console.log(`listening at http://localhost:${PORT}`)
);
