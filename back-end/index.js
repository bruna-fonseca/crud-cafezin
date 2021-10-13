const express = require('express');
const cors = require('cors');
const routeCadastro = require('./routes/routeCadastro');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.use(routeCadastro);

app.listen(PORT, () => console.log(`Rodando na Porta ${PORT}`));