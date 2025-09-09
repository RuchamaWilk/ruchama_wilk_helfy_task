import '../styles/TaskItem.css';



const TaskItem = ({item,onToggle }) => {

    return (
        <div className='card'>
             <button 
                className={`status ${item.completed ? 'done' : 'pending'}`}
                onClick={onToggle}
            >
                {item.completed ? 'Completed' : 'Pending'}
            </button>
            <div className="date">
                    {item.createdAt}
            </div>
            <p>priority: 
            <span className={`priority ${item.priority === 'high' ? 'high' : item.priority === 'medium' ? 'medium' : 'low'}`}>
             {item.priority}
            </span>
            </p>
            <h1>{item.title}</h1>
            <p>{item.description}</p>

        </div>
    );
};

export default TaskItem;
