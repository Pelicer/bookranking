export const addBook = (book) => {
    console.log(book.title);
    return{
        type: "BOOK_ADDED",
        payload: book
    }
}

export const deleteBook = (book) => {
    console.log(book.title);
    return {
        type: "BOOK_DELETED",
        payload: book
    }
}

export const editBook = (book) => {
    console.log(book.title);
    return {
        type: "BOOK_EDITED",
        payload: book
    }
}