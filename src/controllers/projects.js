import {
  getAllProjects,
  getProjectById
} from '../models/projects.js';

const showProjectsPage = async (req, res) => {
  const projects = await getAllProjects();
  const title = 'Service Projects';

  res.render('projects', { title, projects });
};

const showProjectDetailsPage = async (req, res) => {
  const projectId = req.params.id;

  const project = await getProjectById(projectId);

  if (!project) {
    return res.status(404).render('404', {
      title: 'Project Not Found'
    });
  }

  const title = project.title;

  res.render('project', {
    title,
    project
  });
};

export {
  showProjectsPage,
  showProjectDetailsPage
};
