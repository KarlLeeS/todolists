import {combineReducers} from "redux"; 
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
import loading from "./loading"; 
import sample, { sampleSaga } from "./sample"; 

const rootReducer = combineReducers({
    counter,loading,sample
}); 

export function* rootSaga(){
    yield all([counterSaga(),sampleSaga()])
}

export default rootReducer; 