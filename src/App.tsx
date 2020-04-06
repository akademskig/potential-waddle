import React, { Component } from 'react';
import './App.scss';
import MainLayout from './layouts/main.layout';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { fetchBooksStart } from './redux/books/book.actions';
import theme from './theme/index';
import {  createStructuredSelector } from 'reselect';
import { isBookListEmpty } from './redux/books/book.selectors';

class App extends Component<{ fetchBooks: () => void, isEmpty: boolean }> {
  componentDidMount = () => {
    const { fetchBooks, isEmpty } = this.props
    if (isEmpty)
      fetchBooks()
  }
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="#">
            <MainLayout>
              <MainRoutes></MainRoutes>
            </MainLayout>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isEmpty: isBookListEmpty
})
const mapDispatchToProps = (dispatch: any) => ({
  fetchBooks: () => dispatch(fetchBooksStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
