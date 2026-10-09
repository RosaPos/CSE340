import bcrypt from 'bcrypt';

import {
  createUser,
  authenticateUser
} from '../models/users.js';

// REGISTRATION

const showUserRegistrationForm = (req, res) => {
  res.render('register', {
    title: 'Register'
  });
};

const processUserRegistrationForm = async (
  req,
  res
) => {
  const { name, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(
      password,
      salt
    );

    await createUser(
      name,
      email,
      passwordHash
    );

    req.flash(
      'success',
      'Registration successful! Please log in.'
    );

    res.redirect('/');
  } catch (error) {
    console.error('Error registering user:', error);

    req.flash(
      'error',
      'An error occurred during registration. Please try again.'
    );

    res.redirect('/register');
  }
};

// LOGIN

const showLoginForm = (req, res) => {
  res.render('login', {
    title: 'Login'
  });
};

const processLoginForm = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authenticateUser(
      email,
      password
    );

    if (user) {
      // Save user information in the session
      req.session.user = user;

      req.flash(
        'success',
        'Login successful!'
      );

      if (res.locals.NODE_ENV === 'development') {
        console.log(
          'User logged in with ID:',
          user.user_id
        );
      }

      return res.redirect('/dashboard');
    }

    req.flash(
      'error',
      'Invalid email or password.'
    );

    return res.redirect('/login');
  } catch (error) {
    console.error('Error during login:', error);

    req.flash(
      'error',
      'An error occurred during login. Please try again.'
    );

    return res.redirect('/login');
  }
};

// LOGOUT

const processLogout = (req, res) => {
  delete req.session.user;

  req.flash(
    'success',
    'Logout successful!'
  );

  res.redirect('/login');
};

// Protect routes that require authentication
const requireLogin = (req, res, next) => {
  if (!req.session || !req.session.user) {
    req.flash(
      'error',
      'You must be logged in to access that page.'
    );

    return res.redirect('/login');
  }

  next();
};

// Middleware factory to require a specific user role
const requireRole = (role) => {
  return (req, res, next) => {

    // Check if the user is logged in
    if (!req.session || !req.session.user) {
      req.flash(
        'error',
        'You must be logged in to access this page.'
      );

      return res.redirect('/login');
    }

    // Check if the user has the required role
    if (req.session.user.role_name !== role) {
      req.flash(
        'error',
        'You do not have permission to access this page.'
      );

      return res.redirect('/');
    }

    // Allow access
    next();
  };
};

// Show dashboard for authenticated users
const showDashboard = (req, res) => {
  const user = req.session.user;

  res.render('dashboard', {
    title: 'Dashboard',
    name: user.name,
    email: user.email
  });
};

export {
  showUserRegistrationForm,
  processUserRegistrationForm,
  showLoginForm,
  processLoginForm,
  processLogout,
  requireLogin,
  requireRole,
  showDashboard
};
