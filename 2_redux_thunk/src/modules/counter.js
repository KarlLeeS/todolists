import {createAction, handleActions} from "redux-actions"; 

const INCREASE = "counter/INCREASE"; 
const DECREASE = "counter/DECREASE";


export const increase = createAction(INCREASE); 
export const decrease = createAction(DECREASE); 

// redux-thunk 자체가 비동기 요청, 그리고 특정 action 과정에서 프록시 역할을 하는
// 기술이다. 
export const increaseAsync = ()=>dispatch=>{
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
}

export const decreaseAsync =()=>dispatch=>{
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
}

const initialState = {
    hi:true,
    number:0
}; 

const counter = handleActions(
    {
        [INCREASE]: (state)=>({
            ...state,
            number:state.number+1
        }),
        [DECREASE]: (state)=>({
            ...state,
            number:state.number-1
        })
    },
    initialState,
)

export default counter;