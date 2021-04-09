import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// import "./styles.scss";
import './styles/general.scss';
import 'modern-normalize/modern-normalize.css';

import styles from './components/App.module.scss';

ReactDOM.render(
  <React.StrictMode>
    <App className={styles.App} />
  </React.StrictMode>,
  document.getElementById('root'),
);
