import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

const theme = {
  colors: {
    text: '#212121',
    accent: 'red',
    background: '#f3e5e5',
    green: 'green',
    orange: 'orange',
    backgroundBody: 'lightgoldenrodyellow',
    buttonColor: 'lightblue',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
