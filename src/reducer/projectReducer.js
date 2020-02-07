import initialState from './initialState';

export default function projects(state = initialState, action){
     switch (action.type) {
         
          case 'ADD':
            return {...state.projectVideoURL, projectVideoURL: action.project};

          default:
              return {projectVideoURL :state.projectVideoURL};
      }
};
