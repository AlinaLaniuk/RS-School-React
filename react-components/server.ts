import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(path.resolve(dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const html = template.split(`<!--ssr-outlet-->`);
      const { render } = await vite.ssrLoadModule(path.resolve(dirname, 'src/entry-server.tsx'));
      const { pipe } = await render(url, {
        onShellReady() {
          res.write(html[0]);
          pipe(res);
        },
        onAllReady() {
          res.write(html[1]);
          res.end();
        },
      });
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  app.listen(PORT);
  console.log('Server open http://localhost:3000/')
}

createServer();
