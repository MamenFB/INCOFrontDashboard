import React, { useState } from 'react';

const AddGradeForm = () => {
    const [curso, setCurso] = useState('');
    const [estudianteId, setEstudianteId] = useState('');
    const [calificacion, setCalificacion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/add-grade', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ curso, estudianteId, calificacion }),
            });

            if (response.ok) {
                alert('Calificación añadida correctamente');
            } else {
                alert('Error al añadir calificación');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al enviar los datos');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={curso} onChange={(e) => setCurso(e.target.value)} placeholder="Curso" />
            <input type="text" value={estudianteId} onChange={(e) => setEstudianteId(e.target.value)} placeholder="ID del Estudiante" />
            <input type="number" value={calificacion} onChange={(e) => setCalificacion(e.target.value)} placeholder="Calificación" />
            <button type="submit">Añadir Calificación</button>
        </form>
    );
};

export default AddGradeForm;
