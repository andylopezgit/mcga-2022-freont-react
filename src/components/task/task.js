import React from "react";
import './task.css'
import {AiOutlineCloseCircle} from 'react-icons/ai';


function Task({task, completed}) {
    return (
        <div className="container-task">
            <div className={completed ? 'task-completed' : 'task'}>
                {task}
            </div>
            <div>
                <AiOutlineCloseCircle className='task-icon'/>
            </div>
        </div>
    )
}

export {Task}