const fs = require('fs/promises');
const express = require('express');

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
    const data = JSON.stringify(req.body) + '\n';
    const file = './logs.json'
    try {
        await fs.appendFile(file, data);
        res.status(200).json({ message: 'Log salvo com sucesso.' });
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});