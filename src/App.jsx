import { useState } from 'react'
import './App.css'
import TaskList from './Task-list.jsx'
function App() {
  const [count, setCount] = useState(0)
  const [NewTask, setNewTask] = useState("");
  const [myTasks, setMyTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  function handleInputChange(e) {
    let newvalue = e.target.value;
    setNewTask(newvalue);
  }
  function addTask() {
   setMyTasks([...myTasks, NewTask]);
   setNewTask("");
  }
  function deleteTask(deletedTask) {
   setMyTasks(myTasks.filter(task => task !== deletedTask));
  }
  function completeTask(completedTask) {
    setMyTasks(myTasks.filter(task => task !== completedTask));
    setCompletedTasks([...completedTasks, completedTask]);
  }



  return (
    
      <div className="App d-flex justify-content-center align-items-center">
          <div className="container">
              <h3>To-Do List</h3>
              <div className="task-input">
                   <label htmlFor="text" className="visually-hidden">Enter a task</label>
                   <input type="text" className="form-control" placeholder="Enter a task" onChange={(e)=>
                    {handleInputChange(e)}
                    } value={NewTask}/>
                  <button className="circle-btn" type="button" onClick={()=>{
                    addTask();
                  }}>+</button>
              </div>
              <h4>My Tasks</h4>
              <ul className="Task-list">
                {
                  myTasks.map((task,index)=>{
                    return <TaskList key={index} Task={task} deleteTask={deleteTask} completeTask={completeTask} isCompleted={false} />
                  })
                }
              </ul>
              <h4>Completed Tasks</h4>
              <ul className="Task-list">
                {
                  completedTasks.map((task,index)=>{
                    return <TaskList key={index} Task={task} deleteTask={deleteTask} completeTask={completeTask} isCompleted={true} />
                  })
                }
              </ul>
          </div>
      </div>
  
  )
}

export default App
