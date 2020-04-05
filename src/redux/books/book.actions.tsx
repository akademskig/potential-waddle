import { FETCH_BOOKS_START, FETCH_BOOKS_OK, SEARCH_BOOKS_OK, SEARCH_BOOKS_START } from './book.types';


export const fetchBooksStart = () => ({
    type: FETCH_BOOKS_START,
})

export const fetchBooksOk = (bookList: []) => ({
    type: FETCH_BOOKS_OK,
    payload: {
        bookList
    }
})

export const searchBooksStart = (searchValue: string) => ({
    type: SEARCH_BOOKS_START,
    payload:{
        searchValue}
})

export const searchBooksOk = (bookList: []) => ({
    type: SEARCH_BOOKS_OK,
    payload: {
        bookList
    }
})