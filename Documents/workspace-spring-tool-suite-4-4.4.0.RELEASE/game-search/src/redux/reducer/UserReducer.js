import InitialState from './InitialState';

export default function user(state = InitialState, action) {
    switch (action.type) {

        case 'ADD_USER':
            return {
            ...state, userLoggedIn:[action.user]
            }

        case 'LOGOUT':
            return {
            ...state, userLoggedIn:[undefined]
            }

        default:
            return state;
    }
};