import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const[text,setText]=useState("")
    const[day,setDay]=useState("")
    const[reminder,setReminder]=useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text){
            alert("Add a Task")
            return
        }

        onAdd({text,day,reminder})

        setText("")
        setDay("")
        setReminder(false)

    }
    return (
        <form className='add-form' onSubmit={onSubmit}>

            <div className='form-control from-control-check'>
                <label>Task</label>
                <input type="text"placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text"placeholder="Add Day and Time"  value={day} onChange={(e)=>setDay(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Set Reminer</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>
            
            <input type="submit" value="Add Task" className='btn btn-block'></input>

        </form>
    )
}

export default AddTask