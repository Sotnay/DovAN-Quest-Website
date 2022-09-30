const path = require('path');
const express = require('express');

const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    console.log(`GET /`);
	return response.sendFile('index.html', { root: '.' });
});

// les 2 suivants vont devenir un pb à la longue, on peut pas faire une fonction pour tous les get? utiliser le chemin
//genre 
/*
app.get(askedpathfile, (req,res) => {
    console.log(`GET ${askedpath}`)
    if (askedpathfile == '/') {
        return res.sendFile('index.html', { root: '.' });
    }
    else if (askedpathfile == '/auth/discord'){
        return res.sendFile('ChoosePage.html', { root: './src' });
    }
    else {
        cut askedpathfile in askedfile and askedpath
        return res.sendFile('askedfile.html', { root: './askedpath' });
    }
}),
*/
app.get('/styles/style.css', (request, response) => {
    console.log(`GET /styles/style.css`);
	return response.sendFile('style.css', { root: './styles' });
});
app.get('/icons/discordIcon.ico', (request, response) => {
    console.log(`GET /icons/discordIcon.ico`);
	return response.sendFile('discordIcon.ico', { root: './icons' });
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