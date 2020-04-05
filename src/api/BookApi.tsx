
class BookApi {
    apiUrl = 'https://comicclan.vett.io/comics'
    apiToken = 'ComicClanVettIO2019'
     fetchBooks = async () => {
        const options = {
            headers: new Headers({
                'Authorization': `Bearer ${this.apiToken}`
            })
        }
        const response = await fetch(this.apiUrl, options)
        if (response.status === 200) {
            return response.json()
        }
        else{
            throw new Error('Unable to fetch comics.')
        }
    }
}

export default new BookApi()