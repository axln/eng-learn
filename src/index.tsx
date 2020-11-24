import React from 'react';
import { render } from 'react-dom';

// global styles must be imported before any component with styles
import './index.scss';
import { App } from '~/component/App';

window.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('root'));
});
