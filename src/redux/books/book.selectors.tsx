import { createSelector } from "reselect"
import { uniq } from 'lodash'
const selectBook = (state: any) => state.book

export const selectBookList = createSelector(
    [selectBook],
    (book) => book.bookList
)

export const selectSearchTerm  = createSelector(
    [selectBook],
    (book) => book.searchTerm
)

export const isBookListEmpty = createSelector(
    [selectBookList, selectSearchTerm],
    (bookList, searchTerm) => !bookList.length && !searchTerm
)

export const selectBookGroups = createSelector(
    [selectBook],
    (book) => book.bookGroups
)
export const selectFirstBookGroup = createSelector(
    [selectBookGroups],
    (bookGroups) => bookGroups.length ? bookGroups[0] : undefined
)
export const selectGroupValues = (group: string | undefined) => createSelector(
    [selectBookList, selectBookGroups],
    (bookList, bookGroups) => {
        const bookGroupMap = new Map()
        bookGroups.forEach((bG: string) => {
            const groupValues = uniq(bookList.map((book: any) => book[bG])).sort()
            bookGroupMap.set(bG, groupValues)
        })
        if (group)
            return bookGroupMap.get(group)
        return bookGroupMap.get(0)
    }
)

export const selectBookItemsByGroupValue = (group: string | undefined, groupValue: string) => createSelector(
    [selectBookList],
    (bookList) => bookList.filter((book: any) => (group && group === "random") || (group && book[group] === groupValue))
)

export const selectLoading = createSelector(
    [selectBook], (book) => book.loading
)

export const selectBookItem = (id: string | undefined) => createSelector(
    [selectBookList],
    (bookList) => bookList.find((book: any)=> book.id === id)
)
