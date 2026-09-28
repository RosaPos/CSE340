import db from './db.js';

const getAllProjects = async () => {
  const query = `
    SELECT p.project_id, p.title, p.description, p.location, p.date, o.name AS organization_name
    FROM public.service_project p
    JOIN public.organization o ON p.organization_id = o.organization_id;
  `;
  const result = await db.query(query);
  return result.rows;
};

const getProjectsByOrganizationId = async (organizationId) => {
  const query = `
    SELECT project_id, title, description, location, date
    FROM public.service_project
    WHERE organization_id = $1
    ORDER BY date;
  `;

  const result = await db.query(query, [organizationId]);

  return result.rows;
};

const getProjectById = async (projectId) => {
  const query = `
    SELECT
      p.project_id,
      p.organization_id,
      p.title,
      p.description,
      p.location,
      p.date,
      o.name AS organization_name
    FROM public.service_project AS p
    JOIN public.organization AS o
      ON p.organization_id = o.organization_id
    WHERE p.project_id = $1;
  `;

  const result = await db.query(query, [projectId]);

  return result.rows[0];
};

export { getAllProjects, getProjectsByOrganizationId, getProjectById };
