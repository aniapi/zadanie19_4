import uuid from uuid;

// tworzenie komentarza
const ADD_COMMENT = 'ADD_COMMENT';

{
    type: ADD_COMMENT,
    text: 'My first comment !'
}

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

// edycja komentarza
const EDIT_COMMENT = 'EDIT_COMMENT';

{
    type: EDIT_COMMENT,
    id: 20,
    text: 'nowy tekst'
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

// usuwanie komentarza
const REMOVE_COMMENT = 'REMOVE_COMMENT';

{
    type: REMOVE_COMMENT,
    id: 20
}

function removeComment() {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

// ocenianie w górę
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

{
    type: THUMB_UP_COMMENT,
    id: 20,
    initialState: 0
}

function thumbUpComment() {
    return {
        type: THUMB_UP_COMMENT,
        id,
        count: state + 1
    }
}

// ocenianie w dół
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
    type: THUMB_DOWN_COMMENT,
    id: 20,
    initialState: 0
}

function thumbDownComment() {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        count: state - 1
    }
}

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';