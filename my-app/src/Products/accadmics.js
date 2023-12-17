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
      const response = await fetch('http://localhost:8000/academics');
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
    const project = projects.find((p) => p?._id === projectId);
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  // Filter projects based on search queries
  const filteredProjects = projects.filter((academic) =>
    academic &&
    academic.collegename.toLowerCase().includes(searchQueryTitle.toLowerCase()) &&
    academic.projectname.toLowerCase().includes(searchQueryCollege.toLowerCase())
  );

  return (
    <div className="project-page">
      <br /><br /><br /><br /><br />
      <h1>Academic Projects </h1>

      {/* Search bar for Title */}
      <input
        type="text"
        placeholder="Search by college name..."
        value={searchQueryTitle}
        onChange={(e) => setSearchQueryTitle(e.target.value)}
        className="search-bar"
      />

      {/* Search bar for College Name */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQueryCollege}
        onChange={(e) => setSearchQueryCollege(e.target.value)}
        className="search-bar"
      />

     

      <table className="project-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>College Name</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project) => (
            <tr key={project?._id} onClick={() => handleViewMore(project?._id)}>
              <td>{project?.projectname}</td>
              <td>{project?.collegename}</td>
             
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
            <h2>{selectedProject?.projectname}</h2>

            <table className="project-table">
              <tbody>
                <tr>
                  <td><strong>College Name:</strong></td>
                  <td>{selectedProject?.collegename}</td>
                </tr>
                <tr>
                  <td><strong>Title:</strong></td>
                  <td>{selectedProject.projectname}</td>
                </tr>
                {selectedProject?.Description && (
                  <tr>
                    <td><strong>Description:</strong></td>
                    <td>{selectedProject.Description}</td>
                  </tr>
                )}
             
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
