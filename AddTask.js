import React from 'react'
import { useState } from 'react'
const AddTask = (props) => {
    const [text, setText]=useState('')
    const [day,setDay]=useState('')
    const [reaminder, setReaminder]=useState(false)
  
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text){
            alert('Please add a task')
            return
        }

        props.onAdd({text,day,reaminder})

        setText('')
        setDay('')
        setReaminder(false)

    }

    return (
   <form className='add-form' onSubmit={onSubmit}>
    <div className='form-control'>
        <label> Task</label>
        <input type='text' placeholder='Add Task' 
        value={text} onChange={(e) => setText(e.target.value)}
    />
    </div>
    <div className='form-control'>
        <label> Day & Time</label>
        <input type='text' placeholder='Add Day & Time'
        value={day} onChange={(e) => setDay(e.target.value)}
        >
        </input>
    </div>
    <div className='form-control-check'>
        <label> Set Reaminder</label>
        <input type='checkbox' 
        checked={reaminder}
        value={reaminder} 
        onChange={(e) => setReaminder(e.currentTarget.checked)}
        ></input>
    </div>

    <input type='submit' value='Save Task' className='btn btn-block' ></input>
   </form>
  )
}

export default AddTask
