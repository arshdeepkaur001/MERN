import React from "react";
import { useImmerReducer } from "use-immer";

const initialState = { count: 0 };

function reducer(draft, action) {
  switch (action.type) {
    case "reset":
      return initialState;

    case "increment":
      return void draft.count++;

    case "decrement":
      return void draft.count--;
  }
}

function ImmerReducer() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <>
      <center>
        <div
          style={{
            height: "250px",
            width: "250px",
            backgroundColor: "lightsteelblue",
            marginTop: "150px",
            padding: "50px",
            borderRadius: "20px",
          }}
        >
          <b>Count: {state.count}</b>
          <p>
            <button
              style={{
                height: "40px",
                backgroundColor: "lightpink",
                borderRadius: "10px",
                padding: "10px",
                margin: "10px",
              }}
              onClick={() => dispatch({ type: "reset" })}
            >
              Click Reset
            </button>
          </p>
          <p>
            <button
              style={{
                height: "40px",
                backgroundColor: "lightblue",
                borderRadius: "10px",
                padding: "10px",
                margin: "10px",
              }}
              onClick={() => dispatch({ type: "increment" })}
            >
              Click: Increment
            </button>
          </p>
          <p>
            <button
              style={{
                height: "40px",
                backgroundColor: "lightgreen",
                borderRadius: "10px",
                padding: "10px",
                margin: "10px",
              }}
              onClick={() => dispatch({ type: "decrement" })}
            >
              Click : Decremnt
            </button>
          </p>
        </div>
      </center>
    </>
  );
}

export default ImmerReducer;
