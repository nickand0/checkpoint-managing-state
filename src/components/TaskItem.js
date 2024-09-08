import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask, setTaskToEdit }) => {
    return (
        <div className={`task-item p-4 mb-2 flex justify-between items-center bg-gray-100 rounded-lg ${task.completed ? 'bg-green-100' : ''}`}>
        {/* Marquer la tâche comme terminée ou non */}
            <div onClick={() => toggleComplete(task.id)} className="cursor-pointer">
                <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-green-600' : ''}`}>
                    {task.name}
                </h3>
                <p className={`text-sm ${task.completed ? 'line-through' : ''}`}>{task.description}</p>
            </div>
            {/* Boutons pour modifier ou supprimer la tâche */}
            <div className="flex space-x-2">
                <button onClick={() => setTaskToEdit(task)} className="text-yellow-500 hover:text-yellow-600">Modifier</button>
                <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-600">Supprimer</button>
            </div>
        </div>
    );
};

export default TaskItem;
