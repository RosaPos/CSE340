import { Router } from 'express';
import {
  showOrganizationsPage,
  showOrganizationDetailsPage
} from './organizations.js';
import {
  showProjectsPage,
  showProjectDetailsPage
} from './projects.js';
import { showCategoriesPage } from './categories.js';

const router = Router();

router.get('/', (req, res) => {
  const title = 'Home';
  res.render('home', { title });
});

router.get('/organizations', showOrganizationsPage);

router.get('/organizations/:id', showOrganizationDetailsPage);

router.get('/projects', showProjectsPage);

router.get('/projects/:id', showProjectDetailsPage);

router.get('/categories', showCategoriesPage);

// Temporary route to test the 500 error handler
// router.get('/error', (req, res) => {
//  throw new Error('Intentional test error');
//});

export default router;
