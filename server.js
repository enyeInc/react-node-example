const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, error => (
    error
        ? console.error(error) // eslint-disable-line no-console
        : console.info( // eslint-disable-line no-console
            `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
        )
));
