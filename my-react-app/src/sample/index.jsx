import React, { useState } from 'react'
import "./index.css"

const  Showhideapp = () => {
    const [firstname,setfirstname]=useState(false)
    const clickingfirst=()=>{
        setfirstname(!firstname)
    }
    const [lastname,setlastname]=useState(false)
    const clickinglast=()=>{
        setlastname(!lastname)
    }
  return (
    <div className='container'>
      <div className='headingStyles'>Show/Hide</div>
      <div className="btnContainer">
        <div>
        <div onClick={ clickingfirst}  ><button className='btnStyles'>Show/Hide Firstname</button></div>
        <div className='smallCon'>
      {firstname && (
            <div className='applyStyles'>Akhila
                </div>
        )}
      </div>
      </div>
      <div>
        <div onClick={ clickinglast} ><button className='btnStyles' >Show/Hide Lastname</button></div>
        <div className='smallCon'>
      {lastname && (
            <div className='applyStyles'>Gunaganti
                </div>
        )}
      </div>
      </div>
      </div>
     
    </div>
  )
}

export default  Showhideapp
