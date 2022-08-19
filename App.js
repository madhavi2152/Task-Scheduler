import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";

function App() {
  // const name='brad'
  // const x= true
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks, setTasks]=useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30',
        reminder: true,
    },
    {
        id:2,
        text: 'Learn React',
        day: 'Jul 7th at 9 to 4',
        reminder: true,
    },
    {
        id:3,
        text: 'All out for likitha',
        day: 'jul 6th at 7:30',
        reminder: false,
    }
])

const addTask=(task)=>{
  // console.log(task)
  const id=Math.floor(Math.random()*10000)+1
  const newTask={id, ...task}//newtask will be with id and the task we added
  setTasks([...tasks, newTask])//adding a new task with current tasks.

}

//delete task function 
const deleteTask=(id)=>{
  // console.log('delete',id) for our confirmation we are testing it if it deletes the task or not
  //code for deleting the each and every task
  //setting reminder from t to f or f to t
  setTasks(tasks.filter((task)=>task.id != id))
}

//Toggle remainder
const toggleReminder=(id)=>{
  // console.log(id) just for confirmation
  setTasks(
    tasks.map((task)=>
    task.id === id ? {//{}-->it is a object and we are gonna spread across all of the tasks and properties and values but we are gonna change the remainder like t to f
      ...task, reminder:!task.reminder
    }: task
  )
)
}

//Add Task

  return ( 
    <div className="Container">
       <Header onAdd={()=> setShowAddTask(!showAddTask)} 
       ShowAdd={showAddTask}/>{/* <Header title="Hai mawa"/> here it does not gonna work because it heads to parent compionenet header for retriving this prop we need to do some change in header component   */}
      {showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle= {toggleReminder}/>:'No Tasks To Show' }
      
      {/* HERE WE CAN HAVE A DEFAULT PROP WITHOUT PASSING ANYTHING IN THE HEADER BACK  */}
      {/* here we can pass stuff like title to the header back  */}
      {/* <h2>Hello {x ? 'Yes' : 'No'}</h2>  here in the flower bracktes we can work with js variables dynmaicly*/}

    </div>
  );
}




export default App;
