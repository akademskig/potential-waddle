import {combineReducers} from "redux"
import bookReducer from "./books/book.reducer"

export default combineReducers({
    book: bookReducer
})