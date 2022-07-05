import Header from './components/header'
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {
  
  const [tasks,setTasks]=useState([{
    id:1,
    text:'Doctors Appointment',
    day:'Feb 5th',
    reminder:true,
},
{
    id:2,
    text:'Meeting at School',
    day:'Feb 6th',
    reminder:true,
},{
    id:3,
    text:'food shopping',
    day:'Feb 7th',
    reminder:false,
}])

//Delete task
const deleteTask=(id)=>{
  console.log('delete',id)
}

  return (
    <div className='container'>
    <Header  />
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} />:('No Tasks to show')}
    </div>
  )
}

export default App;
