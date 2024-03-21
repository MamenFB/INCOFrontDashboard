import React from "react";

const Resources = () => {
  // Aquí podrías tener lógica para obtener los recursos educativos del estudiante
  // Esto puede incluir enlaces, videos, documentos, etc.

  const resources = [
    { type: "Link", title: "Google", url: "https://www.google.com" },
    { type: "Video", title: "Introduction to React", url: "https://www.youtube.com/watch?v=ZxVlZrbak_E" }
  ];

  return (
    <div className="mt-4">
      <h3>Resources</h3>
      <ul className="list-group">
        {resources.map((resource, index) => (
          <li key={index} className="list-group-item">
            <strong>{resource.type}: </strong>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
