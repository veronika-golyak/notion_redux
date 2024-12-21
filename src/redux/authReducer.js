const initialState = {
    registeredUsers: [], 
    userData: null, 
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            return {
                ...state,
                registeredUsers: [...state.registeredUsers, action.payload],
                userData: action.payload, 
            };
        case 'LOGIN':
            return {
                ...state,
                userData: action.payload, 
            };
        case 'LOGOUT':
            return {
                ...state,
                userData: null, 
            };
        default:
            return state; 
    }
};

export default authReducer;