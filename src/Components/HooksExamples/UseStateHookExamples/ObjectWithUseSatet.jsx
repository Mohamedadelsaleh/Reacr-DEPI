import React, { useState } from 'react'

function ObjectWithUseState() {

    const [formData, setFormData]=useState({fname: "", lname: "", password: "", gender:""});

  return (
    <form>
        <div>
            <label>First Name:</label>
            <input type="text" value={formData.fname} onChange={(e) => setFormData({...formData, fname: e.target.value})} />
        </div>
        <div>
            <label>Last Name:</label>
            <input type="text" value={formData.lname} onChange={(e) => setFormData({...formData, lname: e.target.value})}/>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
        </div>
        <div>
            <h2>Your first name is : {formData.fname}</h2>
            <h2>Your Last name is : {formData.lname}</h2>
            <h2>Your Password is : {formData.password}</h2>
            <h2>{JSON.stringify(formData)}</h2>
        </div>
    </form>
  )
}

export default ObjectWithUseState;