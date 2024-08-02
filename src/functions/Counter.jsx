import React, { useState } from "react"; // Destructuring of usestate from react

function Counter() {
  //========================= Show-Hide Counter and Change Button Title ========================================

  const [showhide, updateShowHide] = useState("none");
  const [title, updateTitle] = useState("Show");

  function doshowhide() {
    if (showhide === "none") {
      updateShowHide("block");
      updateTitle("Hide");
    } else {
      updateShowHide("none");
      updateTitle("Show");
    }
  }

  //================================== Functions for Count and Color Updation ==================================
  const [count, doUpdateCount] = useState(0);
  const [color, updateColor] = useState("black");
  function doIncrement() {
    doUpdateCount(count + 1);
    updateColor("white");
  }

  function doDecrement() {
    doUpdateCount(count - 1);
    updateColor("red");
  }

  function doReset() {
    doUpdateCount(0);
    updateColor("black");
  }

  //===================================================================================================
  return (
    <>
      <center>
        
        <input type="button" value={title} onClick={doshowhide} />

        <div
          style={{
            display: showhide,
            width: "400px",
            height: "150px",
            marginTop: "100px",
            border: " gray Solid 2px",
            paddingBottom: "50px",
            paddingTop: "50px",
            backgroundColor: "lightgray",
          }}
        >
          <center>
            <span style={{ color: color, fontSize: "40px" }}>{count}</span>

            <hr style={{ height: "10px", margin: "30px" }} />

            <input
              type="button"
              value="Increment"
              style={{ height: "30px" }}
              onClick={doIncrement}
              disabled={count === 10}
            />

            <input
              type="button"
              value="Decrement"
              style={{ height: "30px" }}
              onClick={doDecrement}
              disabled={count === 0}
            />

            <input
              type="button"
              value="Reset"
              style={{ height: "30px" }}
              onClick={doReset}
              disabled={count === 0}
            />
          </center>
        </div>
      </center>
    </>
  );
}

export default Counter;
