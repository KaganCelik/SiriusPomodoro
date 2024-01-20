import {useState} from 'react';
import './index.css';

function Tasks() {
    const [task, setTask] = useState([""]);

    const handleTask = () => {
        const taskInput = document.getElementById('task-input');
        if (taskInput.value.trim() !== '') {
            setTask((prevTasks) => [...prevTasks, taskInput.value]);
        }
    };

    return (
        <div>
            <div className='task'>
                <input id='task-input' className='task-input' placeholder='Enter Task'></input>
                <button id='task-btn' onClick={handleTask} type='button'>ADD TASK</button>
            </div>
            <ul>
                {task.map((taskItem, index) => (
                    <li key={index}>{taskItem}</li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks;