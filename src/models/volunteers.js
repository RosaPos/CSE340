import db from './db.js';

// Add a user as a volunteer for a project
const addVolunteer = async (userId, projectId) => {
  const query = `
    INSERT INTO project_volunteer (user_id, project_id)
    VALUES ($1, $2)
    ON CONFLICT (user_id, project_id) DO NOTHING
    RETURNING user_id, project_id;
  `;

  const result = await db.query(query, [userId, projectId]);

  return result.rows[0] || null;
};

// Remove a user's volunteering signup
const removeVolunteer = async (userId, projectId) => {
  const query = `
    DELETE FROM project_volunteer
    WHERE user_id = $1 AND project_id = $2
    RETURNING user_id, project_id;
  `;

  const result = await db.query(query, [userId, projectId]);

  return result.rows[0] || null;
};

// Get all projects a user volunteers for
const getVolunteerProjects = async (userId) => {
  const query = `
    SELECT
      p.project_id,
      p.title,
      p.date,
      p.location
    FROM service_project AS p
    JOIN project_volunteer AS pv
      ON p.project_id = pv.project_id
    WHERE pv.user_id = $1
    ORDER BY p.date ASC, p.title ASC;
  `;

  const result = await db.query(query, [userId]);

  return result.rows;
};

// Check if a user is volunteering for a project
const isUserVolunteering = async (userId, projectId) => {
  const query = `
    SELECT 1
    FROM project_volunteer
    WHERE user_id = $1 AND project_id = $2;
  `;

  const result = await db.query(query, [userId, projectId]);

  return result.rows.length > 0;
};

export {
  addVolunteer,
  removeVolunteer,
  getVolunteerProjects,
  isUserVolunteering
};
