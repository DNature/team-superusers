const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// TODO: For Strict Validation
/*const strongRegex = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
); */

export const validateRegisterUserInput = (
  fullName,
  username,
  password,
  mobileNumber
) => {
  const errors = {};

  if (fullName.trim() === "") {
    errors.fullName = "Full Name must not be empty";
  }

  if (username.trim() === "") {
    errors.username = "username must not be empty";
  }
  //   else {
  //     if (!username.match(regEx)) {
  //       errors.username = "username must be a valid username address";
  //     }
  //   }

  if (mobileNumber.trim() === "") {
    errors.mobileNumber = "Mobile number must not be empty";
  } else if (mobileNumber.length < 9) {
    errors.mobileNumber = "Please enter a valid mobile number";
  }

  if (password === "") {
    errors.password = "Password must not be empty";
  } else if (password.length < 8) {
    errors.password = "Password must not be less than 8 chars";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};

export const validateUserLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "username must not be empty";
  }

  if (password === "") {
    errors.password = "Password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};
