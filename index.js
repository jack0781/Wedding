/* eslint-disable quotes */
// const functions = require("firebase-functions");

const path = require('path');
const express = require('express');
// eslint-disable-next-line no-unused-vars
const hbs = require('hbs');
// const request = require('request');
const cors = require('cors');

const publicDirectoryPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './views');
const app = express();
const port = process.env.PORT || 3000;

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));
app.use(cors());

app.get('', (req, res)=> {
  res.render('index', {
    title: 'Wedding Invitation',
    name: 'Jaydeep Katakiya',
  });
});
app.listen(port, () => {
  console.log('Server is up on port '+port);
});

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.app = functions.https.onRequest(app);
