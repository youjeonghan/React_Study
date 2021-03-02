import React, { useState } from "react"

function Counter() {
    // useState에서 setNumber에 함수를 넘겨주면 이전의 값을 넣는다 8,13 라인 참고
    const [num, setNumber] = useState(0);

    const onIncrease = () =>{
        setNumber(prevNumber => prevNumber + 1);
        console.log('+1');
    }

    const onDecrease = () =>{
        setNumber(prevNumber => prevNumber - 1);
        console.log('-1');
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;