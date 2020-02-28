import { createStore, combineReducers } from 'redux'

import reduxTest from './reduxTest'

const store = createStore(combineReducers({
    reduxTest
}));

export default store;