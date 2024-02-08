import Task from './Task'
const TaskList = ({taskList,deleteTask}) => {
    return <div className='container '>
        {
            taskList.map((task) => (
                <Task Key = {task.id} task = {task} deleteTask = {deleteTask} />
            ))
        }
    </div>
}


export default TaskList