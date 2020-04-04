import {FETCH_BOOKS_START, FETCH_BOOKS_OK} from "./book.types"


export const fetchBooksStart = () => ({
    type: FETCH_BOOKS_START,
})

export const fetchBooksOk = (bookList: []) => ({
    type: FETCH_BOOKS_OK,
    payload: {
        bookList
    }
})