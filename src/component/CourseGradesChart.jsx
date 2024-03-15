import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CourseGradesChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_DE_TU_API_AQUI');
        if (!response.ok) throw new Error('Network response was not ok');
        const json = await response.json();
        setData(json); // Asumiendo que la respuesta JSON ya está en el formato correcto
      } catch (error) {
        console.error('Error al cargar los datos del gráfico:', error);
      }
    };

    fetchData();
  }, []); // El arreglo vacío asegura que esto se ejecute solo una vez cuando el componente se monta

  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="curso" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="promedio" fill="#8884d8" name="Promedio de Calificaciones" />
    </BarChart>
  );
};

export default CourseGradesChart;
