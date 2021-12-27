import { InertiaApp } from '@inertiajs/inertia-react';
import { render } from 'react-dom';
import { Toaster } from 'react-hot-toast';

if (window?.Ziggy?.baseProtocol === 'http' && window.location.protocol === 'https:') {
  window.Ziggy.baseProtocol = 'https'
  window.Ziggy.baseUrl = window.location.origin
}

const app = document.getElementById('app');

render(
  <>
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      containerStyle={{ inset: '-25px 30px 20px -10px' }}
      toastOptions={{
        duration: 3000,
        style: {
          background: '#333',
          color: '#fff',
          bottom: 40,
          padding: '15px 18px',
          boxShadow: '0 0px 7px rgb(0 0 0 / 30%), 0 3px 30px rgb(0 0 0 / 20%)',
        },
      }} />
    <InertiaApp
      initialPage={JSON.parse(app.dataset.page)}
      resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)} />
  </>,
  app,
);
