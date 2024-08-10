import React, { useState } from "react";
function CheckBox() {
  const [checked, setChecked] = useState(true);

  const CheckUncheck=(event)=>{
    setChecked(event.target.checked);
  }
  return (
    <>
    <div>
      <input type="checkbox" checked={checked} onChange={CheckUncheck} /> checked/unchecked
    </div>
    <p>
      {
        (checked?'checked':'unchecked')
      } 
    </p>
    </>
  );
}
export default CheckBox;
