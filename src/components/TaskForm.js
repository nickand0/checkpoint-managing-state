import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit, setTaskToEdit }) => {

  // Gestion des champs de formulaire et des erreurs de validation
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    // Remplir le formulaire avec les données de la tâche en cours d'édition
    useEffect(() => {
    if (taskToEdit) {
        setName(taskToEdit.name);
        setDescription(taskToEdit.description);
    }
    }, [taskToEdit]);

    // Fonction appelée à la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        // Validation : tous les champs doivent être remplis
        if (name.trim() === '' || description.trim() === '') {
            setError('Veuillez remplir tous les champs');
        return;
        }

        if (taskToEdit) {
            // Modification d'une tâche existante
            editTask(taskToEdit.id, { name, description });
            setTaskToEdit(null); // Réinitialisation de la tâche à éditer après soumission
        } else {
        // Ajout d'une nouvelle tâche
            addTask({ name, description, completed: false });
        }

        // Réinitialisation du formulaire après soumission
        setName('');
        setDescription('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <h2 className="text-xl font-semibold mb-4">
                {taskToEdit ? 'Modifier la tâche' : 'Ajouter une tâche'}
            </h2>
            {/* Afficher un message d'erreur si la validation échoue */}
            {error && <p className="text-red-500">{error}</p>}
            <input
                type="text"
                placeholder="Nom de la tâche"
                value={name}
                onChange={(e) => setName(e.target.value)} // Met à jour l'état du nom
                className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} // Met à jour l'état de la description
                className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
                {taskToEdit ? 'Mettre à jour' : 'Ajouter'}
            </button>
        </form>
    );
};

export default TaskForm;
