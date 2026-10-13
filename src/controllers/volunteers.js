import {
  addVolunteer,
  removeVolunteer
} from '../models/volunteers.js';

// Register the logged-in user as a volunteer
const addProjectVolunteer = async (req, res, next) => {
  const userId = req.session.user.user_id;
  const projectId = Number(req.params.projectId);

  if (!Number.isSafeInteger(projectId) || projectId <= 0) {
    return res.status(400).send('Invalid project ID');
  }

  try {
    const result = await addVolunteer(userId, projectId);

    if (result) {
      req.flash('success', 'You are now volunteering for this project!');
    } else {
      req.flash('success', 'You are already volunteering for this project.');
    }

    return res.redirect(`/project/${projectId}`);
  } catch (error) {
    next(error);
  }
};

// Remove the logged-in user's volunteering signup
const removeProjectVolunteer = async (req, res, next) => {
  const userId = req.session.user.user_id;
  const projectId = Number(req.params.projectId);

  if (!Number.isSafeInteger(projectId) || projectId <= 0) {
    return res.status(400).send('Invalid project ID');
  }

  try {
    const result = await removeVolunteer(userId, projectId);

    if (result) {
      req.flash('success', 'Your volunteering signup was removed.');
    } else {
      req.flash('error', 'No volunteering signup was found.');
    }

    const destination =
      req.body.returnTo === 'dashboard'
        ? '/dashboard'
        : `/project/${projectId}`;

    return res.redirect(destination);
  } catch (error) {
    next(error);
  }
};

export {
  addProjectVolunteer,
  removeProjectVolunteer
};
