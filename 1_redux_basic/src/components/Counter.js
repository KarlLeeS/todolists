import React from "react"; 

const Counter = ({
    number,
    onIncrease,
    onDecrease
})=>(
    <div>
        <h1>{number}</h1>
        <div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    </div>
)

export default React.memo(Counter); 
// React.memo를 하면 props나 state가 바뀌는 타이밍에만 리렌더링되는 최적화 