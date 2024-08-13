import React from "react";
import "./Counter.css";
import { increment,decrement } from "../Redux/Reducer/Reducer";
import { useDispatch, useSelector } from "react-redux";

function Counter() {

    const count = useSelector((state) => state.counter.value);

    const dispatch=useDispatch();
  return (
    <div className="container-main">
      <div className="card">
        <h1>Counter</h1>
        <div className="field">
          <p>{count}</p>
          <div className="btn">
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
