import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_BOOKS_OK, FETCH_BOOKS_ERROR, FETCH_BOOKS_START } from './book.types';
import BookApi from '../../api/BookApi';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchBooks() {
   try {
      const books = yield call(BookApi.fetchBooks);
      yield put({type: FETCH_BOOKS_OK, payload: {bookList: books}});
   } catch (e) {
      yield put({type: FETCH_BOOKS_ERROR, message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* bookSaga() {
  yield takeEvery(FETCH_BOOKS_START, fetchBooks);
}

export default bookSaga