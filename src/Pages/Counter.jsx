import React from "react";
import useCounter from "../Components/useCounter";
import "../Styles/Counter.css";

export default function Counter() {
  const { count, dispatch, ACTIONS } = useCounter();


  return (
    <div>
      <h1 className="counter"> Counter</h1>
      <div className="counter-container">
        <input
          type="text"
          placeholder="Type in a count value..."
          onChange={(e) =>
            dispatch({ type: ACTIONS.SET_VALUE, payload: e.target.value })
          }
        />
        <h2>Count : <span   style={{
          color: count > 0 ? 'green' : 'red',
          // color: count > 0 ? 'white' : 'powderblue',
        }} >{count}
          </span> </h2>
        <div>
        <button
            className="dlt-btn"
            onClick={() => {
              dispatch({ type: ACTIONS.DECREASE });
            }}
          >
            Decrement
          </button>
          <button
            className="add-btn"
            onClick={() => {
              dispatch({ type: ACTIONS.INCREASE });
            }}
          >
            Increment
          </button>
        
        </div>

        <button
          onClick={() => {
            dispatch({ type: ACTIONS.RESET });
          }}
          className="rst-btn"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
