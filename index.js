const path = require('path');
const express = require('express');

const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    console.log(`GET /`);
	return response.sendFile('index.html', { root: '.' });
});

app.get('/styles/style.css', (request, response) => {
    console.log(`GET /styles/style.css`);
	return response.sendFile('style.css', { root: './styles' });
});

app.get('/auth/discord', (request, response) => {
    console.log(`GET /auth/discord`);
	return response.sendFile('ChoosePage.html', { root: './src' });
});

app.get('/DovUniversePart', (request, response) => {
    console.log(`GET /DovUniversePart`);
	return response.sendFile('DovUniverseMain.html', { root: './src/DovUniversePart' });
});

app.get('/OvishPart', (request, response) => {
    console.log(`GET /OvishPart`);
	return response.sendFile('OvishMain.html', { root: './src/OvishPart' });
});

app.get('/ShopPart', (request, response) => {
    console.log(`GET /ShopPart`);
	return response.sendFile('ShopMain.html', { root: './src/ShopPart' });
});

const port = '53134';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));