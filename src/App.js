import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
      {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 7th at 3:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food shopping',
        day: 'Feb 7th at 5:30pm',
        reminder: false,
      },
     ]);
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />  
    </div>
  );
}

export default App;
