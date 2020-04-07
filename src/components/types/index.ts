export type BookListGridType = {
    columnWidth: number,
    gridGap: number,
    columns: number
}

export type Book = {
    name: string,
    writer: string,
    artist: string,
    publication: string,
    owner: string,
    rating: number,
    image: string,
    summary: string,
    year: number
}
