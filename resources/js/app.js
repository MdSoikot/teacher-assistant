import { InertiaApp } from '@inertiajs/inertia-react';
import { render } from 'react-dom';

if (window?.Ziggy?.baseProtocol === 'http' && window.location.protocol === 'https:') {
  window.Ziggy.baseProtocol = 'https'
  window.Ziggy.baseUrl = window.location.origin
}

const app = document.getElementById('app');

render(
  <InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
  />,
  app,
);