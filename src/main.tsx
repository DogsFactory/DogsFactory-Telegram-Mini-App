import {render} from 'react-dom';
import App from './App'

eruda.init();

async function enableMocking() {
  const host = document.baseURI.replace(/\/$/, '');

  return new Promise(async (resolve) => {
    const {worker} = await import('./server/worker');

    const startMockWorker = () => worker.start({
      onUnhandledRequest: 'bypass',
      quiet: false,
      serviceWorker: {
        url: `${import.meta.env.VITE_GH_PAGES ? '/miniapp' : ''}/mockServiceWorker.js`
      }
    });
    
// this is just a preview code
