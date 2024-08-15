import React, { useState } from "react";

function ToDo() {
  const [inputlist, setInputList] = useState("");
  const [Items, setitems] = useState([]);

  const items_add = (event) => {
    setInputList(event.target.value);
  };

  const list_items = () => {
    setitems((oldItems) => {
      return [...oldItems, inputlist];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setitems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div
      className="outer_div"
      style={{
        height: "600px",
        backgroundColor: "lightyellow",
        padding: "100px",
      }}
    >
      <div
        className="inner_div"
        style={{
          height: "400px",
          width: "300px",
          backgroundColor: "lightsalmon",
          margin: "auto",
          border: "2px solid black",
          borderRadius: "30px",
        }}
      >
        <div className="to-do" style={{ height: "50px", marginTop: "20px" }}>
          <center
            style={{
              fontFamily: "cursive",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            To-Do List
          </center>
        </div>
        <div className="input-items">
          <center>
            <input
              type="text"
              name="add_items"
              id="add_items"
              placeholder="Add Items here"
              onChange={items_add}
              value={inputlist}
              style={{
                height: "40px",
                width: "200px",
                backgroundColor: "transparent",
                border: "0px",
                textAlign: "center",
                fontSize: "18px",
                marginBottom: "20px",
                fontFamily: "cursive",
              }}
            />
            <button
              onClick={list_items}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "30px",
                marginLeft: "10px",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>+</span>
            </button>
          </center>
          <ul style={{ fontFamily: "cursive" }}>
            {Items.map((itemvalue, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                  text={itemvalue}
                >
                  {" "}
                </ToDoLists>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDo;

const ToDoLists = (props) => {
  return (
    <div>
      <button
        style={{ width: "25px", height: "25px", borderRadius: "25px" }}
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        X
      </button>{" "}
      <span style={{ fontSize: "18px", marginLeft: "5px" }}>{props.text}</span>
    </div>
  );
};
