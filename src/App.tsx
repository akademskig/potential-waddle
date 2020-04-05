import React from 'react';
import './App.scss';
import MainLayout from './layouts/main.layout';
import MainRoutes from './routes';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from 'react-loaders';
const history = createBrowserHistory()

const theme = {
  colors: {
    header_bg: '#535353',
    main_bg: '#333333',
    font_dark: '#5A5A5A',
    font_light: '#CCCCCC',
    border: '#535353'
  },
}
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={<Loader active={true} type="pacman"></Loader>} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Router history={history}>
              <MainLayout>
                <MainRoutes></MainRoutes>
              </MainLayout>
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
