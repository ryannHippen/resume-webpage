/**
 * We don't have to use the variable 'payload', we can also just name it: 'item'
 * @param {Object} size 
 */
export default function updateScreenSize(size){
    return {
        type: 'UPDATE',
        size
    }
}