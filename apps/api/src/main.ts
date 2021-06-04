import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { DBHelper } from './app/helper/db.helper';
import { TodoService } from './app/todo/todo.service';

const app = express();

app.use(cors())

app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.get('/api/todos', async (req, res) => {
  res.json(await TodoService.getAll());
});

app.post('/api/todos', async (req, res) => {
  res.json(await TodoService.create(req.body));
});

app.delete('/api/todos/:id', async (req, res) => {
  res.json(await TodoService.delete(req.params.id));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);

DBHelper.init();

