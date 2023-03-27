import express from 'express';
import ReactDOM from 'react-dom/server';
import { Header } from '../shared/Header';
import { indexTemplate } from './indexTemplate';
import {App} from "../client/app/app";

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (request, result) => {
  result.send(
    indexTemplate( ReactDOM.renderToString(App()) )
  )
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
