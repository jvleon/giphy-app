import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Gifs from './reducers';

export default createStore(Gifs, applyMiddleware(thunk));
