const path = require('path');
const express = require('express');


const app = express();

app.get('/', (req,res) => {
    return res.sendFile('index.html',{root:'.'});
});

app.get('/auth/discord', (request, response) => {
	return response.sendFile('ChoosePage.html', { root: './src' });
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at http://localhost:${port}...`));