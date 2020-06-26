import express, { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import store from '../src/store/configureStore';

const path = require('path');
import fetchNode from 'node-fetch';

Object.assign(global, { fetch: fetchNode });

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello world'));

app.listen(port, () => console.log(`React-gmp listening at http://localhost:${port}`));
