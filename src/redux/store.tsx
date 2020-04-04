import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root.reducer";
import createSagaMiddleware from 'redux-saga'
import bookSaga from "./books/book.saga";
import { composeWithDevTools } from "redux-devtools-extension"
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]
export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(bookSaga)