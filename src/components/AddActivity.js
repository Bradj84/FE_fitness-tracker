import React, { useEffect, useState } from 'react';




export const AddActivity = ({ token }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const AddnewActivity = async(event)=>{
    event.preventDefault()
    try{

    
        const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            name: name,
            description: description

          })
        })
          const result = await response.json()
            console.log(result)
            if (result.error === "Name already exists") {
              window.alert("An activity with that name already exists")
            }
            return result;
          }
          catch(error){
            console.log(error)
          }
      }

    
        


    return (    
        <form onSubmit={AddnewActivity}>
          <label>
            <p>Name</p>
            <input type="text" value={name} onChange={event => setName(event.target.value)} placeholder="Name..."/>
          </label>
          <label>
            <p>Goal</p>
            <input type="text" value={description} onChange={event => setDescription(event.target.value)} placeholder="Description..."/>
          </label>
          <div>
            <button type="submit">Create New Activity</button>
          </div>
        </form>
    )
}
export default AddActivity;