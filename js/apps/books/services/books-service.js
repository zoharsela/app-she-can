export const booksService = {
    getBooks,
    getById,
    saveBooks,
    addReview,
    googleBooks,
    getGoogleBook,
    addBookToShop,
    getNegBookId
}

import { utilService } from '../../../services/util-service.js'

function googleBooks(searchVal) {
    if (!searchVal) searchVal = 'flowers'
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchVal}&filter=paid-ebooks`)
        .then(res => {
            return res.data.items
        })
}

function getGoogleBook(val) {
    return googleBooks(val)
        .then(books => {
            var filteredBooks = books.map(book => {
                return {
                    id: book.id,
                    title: book.volumeInfo.title,
                    subtitle: book.volumeInfo.subtitle,
                    authors: book.volumeInfo.authors,
                    categories: book.volumeInfo.categories,
                    price: book.saleInfo.listPrice.amount,
                    currencyCode: book.saleInfo.listPrice.currencyCode,
                    publishDate: book.volumeInfo.publishedDate,
                    description: book.volumeInfo.description,
                    pageCount: book.volumeInfo.pageCount,
                    language: book.volumeInfo.language,
                    imgUrl: book.volumeInfo.imageLinks.thumbnail,
                    reviews: []
                }
            })
            return filteredBooks
        })
}

var gBooks;
_loadBooks()
function _loadBooks() {
    var books = utilService.loadFromStorage('booksDB');
    if (!books) {
        googleBooks()
            .then(books => {
                var filteredBooks = books.map(book => {
                    return {
                        id: book.id,
                        title: book.volumeInfo.title,
                        subtitle: book.volumeInfo.subtitle,
                        authors: book.volumeInfo.authors,
                        categories: book.volumeInfo.categories,
                        price: book.saleInfo.listPrice.amount,
                        currencyCode: book.saleInfo.listPrice.currencyCode,
                        publishDate: book.volumeInfo.publishedDate,
                        description: book.volumeInfo.description,
                        pageCount: book.volumeInfo.pageCount,
                        language: book.volumeInfo.language,
                        imgUrl: book.volumeInfo.imageLinks.thumbnail,
                        reviews: []
                    }
                })
                gBooks = filteredBooks
                saveBooks()
            })
        return gBooks
    }
    gBooks = books
    return gBooks
}

function getNegBookId(bookId, diff) {
    const idx = gBooks.findIndex(book => book.id === bookId)
    var negIdx = idx + diff
    negIdx = (negIdx < 0) ? gBooks.length - 1 : (negIdx === gBooks.length) ? 0 : negIdx;
    return gBooks[negIdx].id;
}

function getBooks() {
    return Promise.resolve(gBooks)
}

function getById(id) {
    const book = gBooks.find(book => book.id === id)
    return Promise.resolve(book)
}

function addBookToShop(book) {
    gBooks.unshift(book)
    saveBooks()
    return gBooks
}

function saveBooks() {
    utilService.storeToStorage('booksDB', gBooks)
}

function addReview(review, bookId) {
    var currBook;
    return getById(bookId)
        .then(book => {
            currBook = book;
            if (!currBook.reviews) currBook.reviews = [];
            currBook.reviews.push(review);
            saveBooks()
        })
}