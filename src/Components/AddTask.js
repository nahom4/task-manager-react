// text
// date
// check box
import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [remainder,setRemainder] = useState(false)

    const onSubmit = (e) => {

        if (!text) {
            alert('Please add a task')
            return
          }
      
        e.preventDefault()
        onAdd({text,day,remainder})

    }

    return (
        <form className="add-form"  onSubmit={onSubmit}>
            <div className="form-control">
                <label>Text</label>
                <input type = "text" onChange={(e) => {setText(e.target.value)}} value={text}></input>
            </div>

            <div className="form-control">
                <label>day</label>
                <input type = "text" onChange={(e) => {setDay(e.target.value)}} value={day}></input>
            </div>

            <div className="form-control form-control-check">
                <label>remainder</label>
                <input type = "checkbox" onChange={(e) => {setRemainder(e.target.checked)}} value = {remainder}></input>
            </div>
            <input type='submit' className="btn" ></input>
        </form> 
    )
}

export default AddTask