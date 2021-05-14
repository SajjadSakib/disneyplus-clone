const initialSate = {
    user:'',
    dropdown:'',
    recommended:[],
    original:[],
    disneynew:[],
    trending:[]
}

export const setUser = (state=initialSate,action={}) =>{
    switch (action.type) {
        case 'CHANGE_USER_STATE':
            return (Object.assign({},state,{user:action.payload}))
            
    
        default:
            return state;
    }
}
export const getDropdown = (state=initialSate,action={}) =>{
    switch (action.type) {
        case 'SET_DROP_DOWN':
            return (Object.assign({},state,{dropdown:action.payload}))
            
    
        default:
            return state;
    }
}


export const getMovies = (state=initialSate,action={}) =>{
    switch (action.type) {
        case 'SET_MOVIES':
            return (Object.assign({},state,{
                recommended:action.payload.recommended,
                original:action.payload.original,
                disneynew:action.payload.Disneynew,
                trending:action.payload.trending
            }))
            
    
        default:
            return state;
    }
}