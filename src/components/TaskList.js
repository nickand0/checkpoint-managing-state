import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComplete, deleteTask, setTaskToEdit }) => {
    return (
        <div className="task-list">
        {/* Si aucune tâche n'est disponible, afficher un message */}
            {tasks.length === 0 ? (
                <p className="text-gray-500">Aucune tâche disponible</p>
                ) : (
                    // Boucle à travers les tâches et affiche chaque tâche en utilisant le composant TaskItem
                    tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            toggleComplete={toggleComplete} // Fonction pour basculer l'état de complétion
                            deleteTask={deleteTask} // Fonction pour supprimer la tâche
                            setTaskToEdit={setTaskToEdit} // Fonction pour éditer la tâche
                        />
                    ))
                )}
        </div>
    );
};

export default TaskList;
