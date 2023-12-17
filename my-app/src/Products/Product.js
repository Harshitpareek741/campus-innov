import React, { useState, useEffect } from 'react';
import './ProjectPage.css'; // Import your CSS file

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQueryTitle, setSearchQueryTitle] = useState('');
  const [searchQueryCollege, setSearchQueryCollege] = useState('');
  const [searchQueryType, setSearchQueryType] = useState('');

  // Mock API endpoint to retrieve projects data
  const fetchProjects = async () => {
    try {
      // Replace this with your actual backend API endpoint
      const response = await fetch('http://localhost:8000/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleViewMore = (projectId) => {
    const project = projects.find((p) => p._id === projectId);
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  // Filter projects based on search queries
  const filteredProjects = projects.filter((project) =>
    project.projectTitle.toLowerCase().includes(searchQueryTitle.toLowerCase()) &&
    project.collegeName.toLowerCase().includes(searchQueryCollege.toLowerCase()) &&
    project.type.toLowerCase().includes(searchQueryType.toLowerCase())
  );

  return (
    <div className="project-page">
      <br /><br /><br /><br /><br />
      <h1>All Projects</h1>

      {/* Search bar for Title */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQueryTitle}
        onChange={(e) => setSearchQueryTitle(e.target.value)}
        className="search-bar"
      />

      {/* Search bar for College Name */}
      <input
        type="text"
        placeholder="Search by college name..."
        value={searchQueryCollege}
        onChange={(e) => setSearchQueryCollege(e.target.value)}
        className="search-bar"
      />

      {/* Search bar for Type */}
      <input
        type="text"
        placeholder="Search by type..."
        value={searchQueryType}
        onChange={(e) => setSearchQueryType(e.target.value)}
        className="search-bar"
      />

      <table className="project-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>College Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project) => (
            <tr key={project._id} onClick={() => handleViewMore(project._id)}>
              <td>{project.projectTitle}</td>
              <td>{project.collegeName}</td>
              <td>{project.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup code */}
      {selectedProject && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <h2>{selectedProject.projectTitle}</h2>

            <table className="project-table">
              <tbody>
                <tr>
                  <td><strong>College Name:</strong></td>
                  <td>{selectedProject.collegeName}</td>
                </tr>
                <tr>
                  <td><strong>Type:</strong></td>
                  <td>{selectedProject.type}</td>
                </tr>
                {selectedProject.description && (
                  <tr>
                    <td><strong>Description:</strong></td>
                    <td>{selectedProject.description}</td>
                  </tr>
                )}
                <tr>
                  <td><strong>Name of Founder:</strong></td>
                  <td>{selectedProject.founderName}</td>
                </tr>
                <tr>
                  <td><strong>Email of Founder:</strong></td>
                  <td>{selectedProject.founderEmail}</td>
                </tr>
                {/* Add more rows for additional project details */}
                {/* Add any other details you have in your project data */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
