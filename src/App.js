import { useState,useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { FaObjectGroup } from "react-icons/fa";

const App =()=>{
  const[showAddTask,setShowAddTask]=useState(false)
  const [tasks, setTasks] = useState([])

  //fetch from "backend"
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }
    //add task
    const addTask =(task)=>{
      const id=Math.floor(Math.random()*100000)

      const newTask={id,...task}
      setTasks([...tasks,newTask])
    }


    //delete task
    const deleteTask =(id)=>{
      setTasks(tasks.filter((task)=>task.id!==id))
    }

    //reminder
    const toggleReminder=(id)=>{
      setTasks(tasks.map((task)=>task.id===id ? {...task,reminder:!task.reminder} :task))
    }
  return (
    <div className="container">

    <Header title="Task Tracker" onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>  {/* //render components within other components. */}
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length>0 ? (
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
    ): (
      "No tasks to show"
      )}


    </div>
  );
}

export default App;
