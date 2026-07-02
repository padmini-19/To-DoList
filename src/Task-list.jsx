import react from 'react';
function TaskList({Task,deleteTask,completeTask,isCompleted}) {
    return (
        <>
        <div className="tasks d-flex justify-content-between align-items-center">
        <li>{Task}</li>
        {!isCompleted && 
        (
            <div className="task-actions gap-2">
                <button className="btn btn-success" type="button" onClick={() => completeTask(Task)}>
                    Complete
                </button>
                <button className="btn btn-danger" type="button" onClick={() => deleteTask(Task)}>
                    Delete
                </button>
            </div>
        )}
        </div>
        </>    
);
}
export default TaskList;