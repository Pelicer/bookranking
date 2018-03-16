export const addBook = (book) => {
    console.log(book.title);
    return{
        type: "BOOK_ADDED",
        payload: book
    }
}

export function deleteBook (id) {
    return {
        type: "DELETE_BOOK",
        payload: id
    }
}

export const editBook = (book) => {
    console.log(book.title);
    return {
        type: "BOOK_EDITED",
        payload: book
    }
}