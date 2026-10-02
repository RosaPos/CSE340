import db from './db.js';

const getAllCategories = async () => {
  const query = `
    SELECT category_id, name
    FROM public.category;
  `;

  const result = await db.query(query);

  return result.rows;
};

const getCategoryDetails = async (categoryId) => {
  const query = `
    SELECT
      category_id,
      name
    FROM public.category
    WHERE category_id = $1;
  `;

  const result = await db.query(query, [categoryId]);

  return result.rows.length > 0 ? result.rows[0] : null;
};

const getCategoriesByProjectId = async (projectId) => {
  const query = `
    SELECT
      c.category_id,
      c.name
    FROM public.project_category AS pc
    JOIN public.category AS c
      ON pc.category_id = c.category_id
    WHERE pc.project_id = $1
    ORDER BY c.name;
  `;

  const result = await db.query(query, [projectId]);

  return result.rows;
};

const getProjectsByCategoryId = async (categoryId) => {
  const query = `
    SELECT
      p.project_id,
      p.title
    FROM public.project_category AS pc
    JOIN public.service_project AS p
      ON pc.project_id = p.project_id
    WHERE pc.category_id = $1
    ORDER BY p.title;
  `;

  const result = await db.query(query, [categoryId]);

  return result.rows;
};

export {
  getAllCategories,
  getCategoryDetails,
  getCategoriesByProjectId,
  getProjectsByCategoryId
};
