export default function(state=null, action){
    switch (action.type) {
        case "BOOK_ADDED":
            return action.payload;            

        case "BOOK_DELETED":
            return action.payload;

        case "BOOK_EDITED":
            return action.payload;
        default:
            break;
    }
    return state;
}