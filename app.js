const express = require('express')
const connect_mongos = require('./db');
var cors = require('cors')

connect_mongos();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/preview');
});

app.get('/preview', (req, res) => {
  res.type('html').send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>iNoteBook Preview</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; background: #f8fafc; color: #111827; }
          .container { max-width: 760px; margin: 60px auto; padding: 24px; background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
          h1 { margin-top: 0; }
          code { background: #eef2ff; padding: 2px 6px; border-radius: 4px; }
          .pill { display: inline-block; margin-right: 8px; margin-top: 8px; padding: 6px 10px; background: #2563eb; color: white; border-radius: 999px; font-size: 0.9rem; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>iNoteBook Preview</h1>
          <p>This is a simple preview page for the iNoteBook backend app.</p>
          <p><a href="https://i-note-book-codewithmsami.vercel.app/" target="_blank" rel="noopener noreferrer">Open the main app</a></p>
          <p>Available routes:</p>
          <div>
            <span class="pill">/preview</span>
            <span class="pill">/auth/user</span>
            <span class="pill">/auth/notes</span>
          </div>
          <p>You can use this endpoint to confirm the server is running before opening the frontend.</p>
        </div>
      </body>
    </html>`);
});

app.use('/auth/user', require('./routes/auth'))
app.use('/auth/notes', require('./routes/notes'))

module.exports = app;
