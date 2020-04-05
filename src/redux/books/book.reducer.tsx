import { FETCH_BOOKS_OK, SEARCH_BOOKS_OK, FETCH_BOOKS_START, SEARCH_BOOKS_START } from './book.types';

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
                bookList
            }
        }
        case FETCH_BOOKS_START: {
            return {
                ...state,
                loading: true
            }
        }

        case SEARCH_BOOKS_OK: {
            const { bookList } = action.payload
            return {
                ...state,
                loading: false,
                bookList
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

export default bookReducer