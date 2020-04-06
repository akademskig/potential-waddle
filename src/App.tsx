import React, { Component } from 'react';
import './App.scss';
import MainLayout from './layouts/main.layout';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { fetchBooksStart } from './redux/books/book.actions';
import theme from './theme/index';

class App extends Component<{ fetchBooks: () => void }> {
  componentDidMount = () => {
    const { fetchBooks } = this.props
    fetchBooks()
  }
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <MainLayout>
              <MainRoutes></MainRoutes>
            </MainLayout>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchBooks: () => dispatch(fetchBooksStart())
})

export default connect(null, mapDispatchToProps)(App)
