import { FETCH_BOOKS_OK, FETCH_BOOKS_START, SEARCH_BOOKS_START } from './book.types';
import { v1 } from 'uuid'
const initialState = {
    bookList: [],
    loading: false,
    bookGroups: ["year", "writer", "artist", "owner", "random"]
}

function bookReducer(state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case FETCH_BOOKS_OK: {
            const { bookList } = action.payload
            return {
                ...state,
                loading: false,
                bookList: addUUids(bookList)
            }
        }
        case FETCH_BOOKS_START: {
            return {
                ...state,
                loading: true
            }
        }
        case SEARCH_BOOKS_START: {
            return {
                ...state,
                loading: true
            }
        }
        default: return state
    }
}

const addUUids = (bookList: any) => {
    return bookList.map((book: any) => {
        book['id'] = v1()
        return book
    })
}

export default bookReducer