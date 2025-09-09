import { useState } from 'react'
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div>
        The Tasks I Have for Now!
        <button onClick={() => setShowAdd(true)}>
                add new Task!
            </button>

            {showAdd && <TaskForm />}
        <TaskList/>
     </div>  
   
  )
}

export default App
