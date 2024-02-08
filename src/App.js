import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import { useEffect, useState } from 'react';
import AddTask from './Components/AddTask';
function App() {

  useEffect(() => {

    const getTasks = async () => {
      console.log("here")
      const data = await fetchData()
      setTaskList(data)
      console.log(taskList)
       
    }  
    getTasks()  
  },[])

  async function fetchData(){
    const data = await fetch("http://localhost:5000/tasks")
    const jsonData = await data.json()
    return jsonData
  }

  async function deleteData(id){
    const data = await fetch(`http://localhost:5000/tasks/${id}`,
    { 
      method : "Delete"
    })
    const jsonData = await data.json()
    return jsonData
  }

  function deleteTask(id){
    setTaskList(taskList.filter((task) => task.id !== id))
    deleteData(id)
  }

  async function addTask(task){
     const newTask = await fetch("http://localhost:5000/tasks/",{
      method : "POST",
      headers :{
        "content-type" : "application/json" 
      },
      body : JSON.stringify(task)

    })

    return await newTask.json()
  }
  async function onAdd(task) {
    const newTask = await addTask(task)
    setTaskList([...taskList,newTask])
  }

  function toggle(){
    setIsVisible(!isVisible)
  }

  // let's add taskList to app state 
  const [taskList,setTaskList] = useState([])
  const [isVisible, setIsVisible] = useState(true)

  return (
        <div className='container'>
            <Header isVisible = {isVisible} toggle = {toggle} /> 
            {isVisible && <AddTask onAdd = {onAdd} /> }
            <TaskList taskList = {taskList} deleteTask = {deleteTask} />
        </div>
          
        )
}

export default App;
