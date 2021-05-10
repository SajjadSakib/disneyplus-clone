const initialSate = {
    user:''
}

export const setUser = (state=initialSate,action={}) =>{
    switch (action.type) {
        case 'CHANGE_USER_STATE':
            return (Object.assign({},state,{user:action.payload}))
            
    
        default:
            return state;
    }
}