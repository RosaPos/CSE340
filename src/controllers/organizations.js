import {
  getAllOrganizations,
  getOrganizationById
} from '../models/organizations.js';

import { getProjectsByOrganizationId } from '../models/projects.js';

const showOrganizationsPage = async (req, res) => {
  const organizations = await getAllOrganizations();
  const title = 'Our Partner Organizations';

  res.render('organizations', { title, organizations });
};

const showOrganizationDetailsPage = async (req, res, next) => {
  const organizationId = req.params.id;

  const organization = await getOrganizationById(organizationId);

  if (!organization) {
    return res.status(404).render('404', {
      title: 'Organization Not Found'
    });
  }

  const projects = await getProjectsByOrganizationId(organizationId);

  const title = organization.name;

  res.render('organization', {
    title,
    organization,
    projects
  });
};

export {
  showOrganizationsPage,
  showOrganizationDetailsPage
};
