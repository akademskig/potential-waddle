import {combineReducers} from "redux"
import bookReducer from "./books/book.reducer"

console.log(bookReducer)
export default combineReducers({
    book: bookReducer
})