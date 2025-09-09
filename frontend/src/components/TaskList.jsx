import { useState, useEffect } from 'react';
import { fetchTasks } from '../services/apiService';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

const TaskList = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            try {
                const data = await fetchTasks();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getTasks();
    }, []);

     //need to change in the arr - stay change after reload
    const toggleCompleted = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };
    return (
        <div className="grid">
            {tasks.map((task) => (
                <TaskItem key={task.id} item={task} onToggle={() => toggleCompleted(task.id)} />
            ))}
        </div>
    );
};

export default TaskList;
