import express, { Request, Response } from 'express';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import store from '../src/store/configureStore';
import fetchNode from 'node-fetch';
import { getMoviesAction } from '../src/store/actions/actions';
import { Provider } from 'react-redux';
import { ErrorBoundary } from '../src/components/ErrorBoundary/ErrorBoundary';
import { StaticRouter } from 'react-router-dom';
import { App } from '../src/App';
import { Footer } from '../src/components/Footer/Footer';

const path = require('path');

const public_dir = path.join(__dirname, '../public');


Object.assign(global, { fetch: fetchNode });

const app = express();
const port = 3000;


app.use(express.static(public_dir));

app.get('*', async (req, res) => {

    await getMoviesAction()(store.dispatch, store.getState, null);
    const preloaded = store.getState();

    const Root = (
        <App router={StaticRouter} store={store} />
    );

    const htmlContent = renderToString(Root);
    const preloadedState = store.getState();

    const html = `
    <!DOCTYPE html>
    <html>

    <head>
    <meta charset="utf-8" />
    <title>React Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap"
    rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
  <link rel="shortcut icon" type="image/png" href="./assets/favicon.ico" />
    </head>


    <body>
        <div id="root">${htmlContent}</div>
        <script>
            window.__PRELOADED_STATE__ = ${ JSON.stringify(preloadedState)}
        </script>
        <script src="/main.js"></script>
    </body>
`;

    res.send(html);
});

app.listen(port, () => console.log(`React-gmp listening at http://localhost:${port}`));
