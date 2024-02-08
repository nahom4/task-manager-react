import {Fa, FaTimes} from "react-icons/fa"
const Task = ({task,deleteTask}) => {
    const onDelete = (id) =>{
        deleteTask(id)
    }

    return (<div className="task">
            <h3>
                {task.text}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick = {(e) => {onDelete(task.id)} } />
            </h3>
            <p>
                {task.day}
            </p>
        </div>) 
}

export default Task