/**
 * We don't have to use the variable 'payload', we can also just name it: 'item'
 * @param {Object} project 
 */
export default function addProject(project){
    return {
        type: 'ADD',
        project
    }
}