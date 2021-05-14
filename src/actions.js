export const onUserChange = (text) => ({
    type:'CHANGE_USER_STATE',
    payload: text
})

export const setDropdown = (text) =>({
    type:'SET_DROP_DOWN',
    payload:text
})

export const setMovies = (movieObject) =>({
    type:'SET_MOVIES',
    payload:movieObject
})