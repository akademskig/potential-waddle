import { FETCH_BOOKS_OK } from "./book.types"

const initialState = {
    bookList: [],
    bookGroups: ["year", "writer", "artist", "owner", "random"]
}

function bookReducer(state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case FETCH_BOOKS_OK: {
            const { bookList } = action.payload
            return {
                ...state,
                bookList
            }
        }
        default: return state
    }
}

export default bookReducer