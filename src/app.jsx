import React from 'react';
import { render } from 'react-dom';
import SkipNavigation from './component.jsx';

/* app.jsx
 * Used for local development of React Components
 */
render(
  <SkipNavigation target="main" />,
  document.getElementById('component')
);
