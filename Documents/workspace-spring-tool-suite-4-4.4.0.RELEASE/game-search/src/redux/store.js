import { applyMiddleware, createStore, compose } from 'redux';
import RootReducer from "../redux/reducer/RootReducer";
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function store() {
    return createStore(
      RootReducer,
      composeEnhancer(applyMiddleware(thunk)),
    );
   }