import { InertiaApp } from '@inertiajs/inertia-react';
import { render } from 'react-dom';


// if (window?.Ziggy?.baseProtocol === 'http') {
//   window.Ziggy.baseProtocol = 'https'
// }

const app = document.getElementById('app');

render(
    <InertiaApp
      initialPage={JSON.parse(app.dataset.page)}
      resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
    />,
  app,
);