import Task from "./Task"

const Tasks = (props) => {
  return (

    <div>
        <>
        {/* settasks here is used to assign a new task nto the list */}
        {props.tasks.map((task)=>(
            <Task key={task.id} 
            task={task}
            onDelete={props.onDelete} 
            onToggle={props.onToggle}/>
            // here the map creates list for tasks and text is child for it 
            // so we have to assign a uique prop for parent which is h3
        ))}
        </>

    </div>
  )
}

export default Tasks