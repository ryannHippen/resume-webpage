/**
 * @param {Object} user 
 */

export function addLoggedInUser(user) {
    return {
        type: 'ADD_USER',
        user
    }
}

export function logOut(user) {
    return {
        type: 'LOGOUT',
        user
    }
}