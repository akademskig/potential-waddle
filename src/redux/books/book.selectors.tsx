import { createSelector } from "reselect"
import { uniq } from 'lodash'
const selectBook = (state: any) => state.book

export const selectBookItems = createSelector(
    [selectBook],
    (book) => book.bookList
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
    [selectBookItems, selectBookGroups],
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
    [selectBookItems],
    (bookList) => bookList.filter((book: any) => (group && group === "random") || (group && book[group] === groupValue))
)

export const selectLoading = createSelector(
    [selectBook], (book) => book.loading
)

export const selectBookItem = (id: string | undefined) => createSelector(
    [selectBookItems],
    (bookList) => bookList.find((book: any)=> book.id === id)
)