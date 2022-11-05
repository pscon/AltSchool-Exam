import { useReducer } from "react";

const useCounter = () => {
  const ACTIONS = {
    INCREASE: "increase",
    DECREASE: "decrease",
    RESET: "reset",
    SET_VALUE : "setValue"
  };
  function setValue(value, count) {
    let num = Number(value)
    if(String(num) === "NaN" || value === "") {
        return count;
    }
    return num;
  }
  function reducer(count, action) {
    switch (action.type) {
      case ACTIONS.SET_VALUE:
        return setValue(action.payload, count);
      case ACTIONS.INCREASE:
        return ++count;
      case ACTIONS.DECREASE:
        return --count;
      case ACTIONS.RESET:
        return 0;
      default:
        return count;
    }
  }
  const [count, dispatch] = useReducer(reducer, 0);

  return { count, dispatch, ACTIONS };
};
export default useCounter;

/*

Setup a custom counter hook with increment, decrement, reset, 
setValue functions with a valid UI and Implement a combination 
of states with a useReducer that implements a counter with the 
four evident features in the custom hook -  increment, 
decrement, reset, setValue. Implement a page for the 
custom hook, useReducer, 404, and a page to test error 
boundary and good SEO.

*/
