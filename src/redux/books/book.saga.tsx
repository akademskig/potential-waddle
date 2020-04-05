import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { FETCH_BOOKS_OK, FETCH_BOOKS_ERROR, FETCH_BOOKS_START, SEARCH_BOOKS_START } from './book.types';
import BookApi from '../../api/BookApi';


function* fetchBooks() {
   try {
      const books = yield call(BookApi.fetchBooks);
      yield put({type: FETCH_BOOKS_OK, payload: {bookList: books}});
   } catch (error) {
      yield put({type: FETCH_BOOKS_ERROR, error});
   }
}

function* searchBooks(searchValue: string){
   yield delay(500)
   try {
      const books = yield call(BookApi.fetchBooks, searchValue);
      yield put({type: FETCH_BOOKS_OK, payload: {bookList: books}});
   } catch (error) {
      yield put({type: FETCH_BOOKS_ERROR, error});
   }
}

function* bookSaga() {
   yield takeEvery(FETCH_BOOKS_START, fetchBooks)
   yield takeLatest(SEARCH_BOOKS_START, (action: any) => searchBooks(action.payload.searchValue))
}

export default bookSaga