import { Router } from 'express';

import {
  showOrganizationsPage,
  showOrganizationDetailsPage,
  showNewOrganizationForm,
  processNewOrganizationForm,
  showEditOrganizationForm,
  processEditOrganizationForm,
  organizationValidation
} from './controllers/organizations.js';

import {
  showProjectsPage,
  showProjectDetailsPage,
  showNewProjectForm,
  processNewProjectForm,
  showEditProjectForm,
  processEditProjectForm,
  projectValidation
} from './controllers/projects.js';

import {
  showCategoriesPage,
  showCategoryDetailsPage,
  showAssignCategoriesForm,
  processAssignCategoriesForm,
  showNewCategoryForm,
  processNewCategoryForm,
  showEditCategoryForm,
  processEditCategoryForm,
  categoryValidation
} from './controllers/categories.js';

import {
  showHomePage
} from './controllers/index.js';

import {
  testErrorPage
} from './controllers/errors.js';

import {
  showUserRegistrationForm,
  processUserRegistrationForm,
  showLoginForm,
  processLoginForm,
  processLogout,
  requireLogin,
  requireRole,
  showDashboard,
  showUsersPage
} from './controllers/users.js';

const router = Router();

// Home
router.get('/', showHomePage);

// User registration
router.get(
  '/register',
  showUserRegistrationForm
);

router.post(
  '/register',
  processUserRegistrationForm
);

// User login
router.get(
  '/login',
  showLoginForm
);

router.post(
  '/login',
  processLoginForm
);

router.get(
  '/logout',
  processLogout
);

// Protected dashboard
router.get(
  '/dashboard',
  requireLogin,
  showDashboard
);

// Admin-only registered users page
router.get(
  '/users',
  requireRole('admin', '/dashboard'),
  showUsersPage
);

// Public organization pages
router.get(
  '/organizations',
  showOrganizationsPage
);

router.get(
  '/organization/:id',
  showOrganizationDetailsPage
);

// Admin-only organization routes
router.get(
  '/new-organization',
  requireRole('admin'),
  showNewOrganizationForm
);

router.post(
  '/new-organization',
  requireRole('admin'),
  organizationValidation,
  processNewOrganizationForm
);

router.get(
  '/edit-organization/:id',
  requireRole('admin'),
  showEditOrganizationForm
);

router.post(
  '/edit-organization/:id',
  requireRole('admin'),
  organizationValidation,
  processEditOrganizationForm
);

// Public project pages
router.get(
  '/projects',
  showProjectsPage
);

router.get(
  '/project/:id',
  showProjectDetailsPage
);

// Project routes - Admin only
router.get(
  '/new-project',
  requireRole('admin'),
  showNewProjectForm
);

router.get(
  '/edit-project/:id',
  requireRole('admin'),
  showEditProjectForm
);

router.post(
  '/edit-project/:id',
  requireRole('admin'),
  projectValidation,
  processEditProjectForm
);

router.post(
  '/new-project',
  requireRole('admin'),
  projectValidation,
  processNewProjectForm
);

// Public category pages
router.get(
  '/categories',
  showCategoriesPage
);

router.get(
  '/category/:id',
  showCategoryDetailsPage
);

// Category routes - Admin only
// Assign categories to projects
router.get(
  '/assign-categories/:projectId',
  requireRole('admin'),
  showAssignCategoriesForm
);

router.post(
  '/assign-categories/:projectId',
  requireRole('admin'),
  processAssignCategoriesForm
);

// Create category
router.get(
  '/new-category',
  requireRole('admin'),
  showNewCategoryForm
);

router.post(
  '/new-category',
  requireRole('admin'),
  categoryValidation,
  processNewCategoryForm
);

// Edit category
router.get(
  '/edit-category/:id',
  requireRole('admin'),
  showEditCategoryForm
);

router.post(
  '/edit-category/:id',
  requireRole('admin'),
  categoryValidation,
  processEditCategoryForm
);

// Test error route
router.get(
  '/test-error',
  testErrorPage
);

export default router;
