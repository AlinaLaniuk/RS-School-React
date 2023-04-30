import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

export const render = (
  path: string | Partial<Location>,
  options: RenderToPipeableStreamOptions | undefined
) => {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
};
