import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  // Gestion des tâches et de la tâche en cours d'édition
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Charger les tâches depuis localStorage à l'initialisation de l'application
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Sauvegarder les tâches dans localStorage à chaque changement de tâche
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Fonction pour ajouter une nouvelle tâche
  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() }; // Génère un ID unique
    setTasks([...tasks, newTask]); // Ajouter la nouvelle tâche à la liste des tâches
  };

  // Fonction pour modifier une tâche existante
  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task // Met à jour la tâche avec les nouvelles informations
      )
    );
  };

  // Fonction pour supprimer une tâche
  const deleteTask = (id) => {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?');
    if (confirmed) {
      setTasks(tasks.filter((task) => task.id !== id)); // Filtre pour ne garder que les tâches dont l'ID ne correspond pas
    }
  };

  // Fonction pour basculer l'état d'achèvement d'une tâche
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task // Inverse l'état "completed"
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Gestionnaire de tâches</h1>
        {/* Composant pour le formulaire d'ajout/modification de tâche */}
        <TaskForm
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
          setTaskToEdit={setTaskToEdit}
        />
        {/* Composant pour la liste des tâches */}
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          setTaskToEdit={setTaskToEdit}
        />
      </div>
    </div>
  );
};

export default App;
