import React, { useState } from 'react'

function FullName() {

    const [fn, updateFN]=useState("")
    const [ln, updateLN]=useState("")
    const [full, SetFull]=useState("")
    
    function updateboth(event){
        if(event.target.name==="firstName")
        {
            updateFN(event.target.value)
        }
        else
        updateLN(event.target.value)
    }


  return (
    <div>
        First Name: <input type="text" name="firstName" onChange={updateboth} /> {fn}

        <br /><br />

        Last Name: <input type="text" name="lastName" onChange={updateboth} /> {ln}

        <br /><br />
        <input type="button" value="Join" onClick={()=>{SetFull(fn+" "+ln)}} />
        <br />
        {full}
    </div>
  )
}

export default FullName