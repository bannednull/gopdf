import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static('dist/client/'));
app.use(ssrHandler);

app.listen(port, () => {
  console.log(`🚀 The server is running on port: ${port}`);
});
