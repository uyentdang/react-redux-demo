import { createStore } from 'redux';
import counterReducer from '../reducers/counterReducer';

const store = createStore(counterReducer);

console.log(store.getState());
export default store;