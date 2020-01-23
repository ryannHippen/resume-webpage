import initialState from './initialState';

export default function screenSize(state = initialState, action){
     switch (action.type) {
         
          case 'UPDATE':
              if(action.size.screenWidth === 0){
                // console.log(state)
                  return state;
              } else {
  
                return {...state, screen: action.size};
              }
              
          default:
              return state;
      }
};