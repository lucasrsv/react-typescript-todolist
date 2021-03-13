import React from 'react'
import { ITask } from '../Interfaces';

interface Props {
    task: ITask;
    completeTask(taskName: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
    <div className="task">
        <div className="content">
            <span className="taskName">{task.taskName}</span>
            <span className="deadline">{task.deadline}</span>
        </div>
        <button onClick={() => {completeTask(task.taskName)}}>x</button>
    </div>
    );
}

export default TodoTask
