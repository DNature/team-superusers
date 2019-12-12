const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// TODO: For Strict Validation
/*const strongRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
); */

export const validateRegisterUserInput = (
  displayName,
  email,
  password,
  mobileNumber
) => {
  const errors = {};

  if (displayName.trim() === '') {
    errors.displayName = 'Display name must not be empty';
  }

  if (email.trim() === '') {
    errors.email = 'Email must not be empty';
  } else if (!email.match(regEx)) {
    errors.email = 'Email address must be a valid email';
  }

  if (mobileNumber.trim() === '') {
    errors.mobileNumber = 'Mobile number must not be empty';
  } else if (mobileNumber.length < 9) {
    errors.mobileNumber = 'Please enter a valid mobile number';
  }

  if (password === '') {
    errors.password = 'Password must not be empty';
  } else if (password.length < 8) {
    errors.password = 'Password must not be less than 8 chars';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};

export const validateUserLoginInput = (email, password) => {
  const errors = {};
  if (email.trim() === '') {
    errors.email = 'email must not be empty';
  } else if (!email.match(regEx)) {
    errors.email = 'Email address must be a valid email';
  }

  if (password === '') {
    errors.password = 'Password must not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};

export const validateCategoryInput = name => {
  const errors = {};
  if (name.trim() === '') errors.name = 'Field must not be empty';

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};

export const validatePropertyInput = (
  name,
  description,
  location,
  ammount,
  imageUrl,
  category
) => {
  const errors = {};
  if (name.trim() === '') errors.name = 'Field must not be empty';
  if (description.trim() === '')
    errors.description = 'Description cannot be empty';
  if (location.trim() === '') errors.location = 'Location cannot be empty';
  if (ammount.trim() === '') errors.ammount = 'Field must not be empty';
  if (imageUrl.trim() === '') errors.imageUrl = 'Image Url must not be empty';
  if (category.trim() === '') errors.category = 'Categroy must not be empty';
  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};
