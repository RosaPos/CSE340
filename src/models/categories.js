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

const assignCategoryToProject = async (
  projectId,
  categoryId
) => {
  const query = `
    INSERT INTO public.project_category (
      project_id,
      category_id
    )
    VALUES ($1, $2);
  `;

  await db.query(
    query,
    [projectId, categoryId]
  );
};

const updateCategoryAssignments = async (
  projectId,
  categoryIds
) => {
  const deleteQuery = `
    DELETE FROM public.project_category
    WHERE project_id = $1;
  `;

  await db.query(
    deleteQuery,
    [projectId]
  );

  for (const categoryId of categoryIds) {
    await assignCategoryToProject(
      projectId,
      categoryId
    );
  }
};

const createCategory = async (name) => {
  const query = `
    INSERT INTO public.category (
      name
    )
    VALUES ($1)
    RETURNING category_id;
  `;

  const result = await db.query(
    query,
    [name]
  );

  if (result.rows.length === 0) {
    throw new Error(
      'Failed to create category'
    );
  }

  return result.rows[0].category_id;
};

const updateCategory = async (
  categoryId,
  name
) => {
  const query = `
    UPDATE public.category
    SET name = $1
    WHERE category_id = $2
    RETURNING category_id;
  `;

  const result = await db.query(
    query,
    [name, categoryId]
  );

  if (result.rows.length === 0) {
    throw new Error(
      'Category not found or update failed'
    );
  }

  return result.rows[0].category_id;
};

export {
  getAllCategories,
  getCategoryDetails,
  getCategoriesByProjectId,
  getProjectsByCategoryId,
  updateCategoryAssignments,
  createCategory,
  updateCategory
};
