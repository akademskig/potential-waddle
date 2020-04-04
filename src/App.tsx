import React from 'react';
import './App.css';
import MainLayout from './layouts/main.layout';
import MainRoutes from './routes';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from './redux/store';
const history = createBrowserHistory()

const theme = {
  colors: {
    header_bg: '#535353',
    main_bg: '#333333',
    font_dark: '#5A5A5A',
    font_light: '#CCCCCC'
  },
}
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <MainLayout>
              <MainRoutes></MainRoutes>
            </MainLayout>
          </Router>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
