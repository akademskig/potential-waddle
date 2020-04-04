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
    [selectBook, selectBookGroups],
    (book, bookGroups) => {
        const bookGroupMap = new Map()
        bookGroups.forEach((bG: string) => {
            const groupValues = uniq(book.bookList.map((book: any) => book[bG])).sort()
            bookGroupMap.set(bG, groupValues)
        })
        if (group)
            return bookGroupMap.get(group)
        return bookGroupMap.get(0)
    }
)

export const selectBookItemsByGroupValue = (group: string | undefined, groupValue: string) => createSelector(
    [selectBook],
    (book) => book.bookList.filter((book: any) => (group && group === "random") || (group && book[group] === groupValue))
)