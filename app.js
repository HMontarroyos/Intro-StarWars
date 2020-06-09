const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('App - Intro Star Wars');
});

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}`));