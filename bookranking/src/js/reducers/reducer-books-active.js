export default function(state=[], action){
    switch (action.type) {
        case "BOOK_ADDED":
            return action.payload;            

        case 'DELETE_BOOK': return state.filter(function (book) {
            return book.id !== action.id
        });

        case "BOOK_EDITED":
            return action.payload;

        default:
            break;
    }
    return state;
}