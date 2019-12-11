import { useState } from "react";

const UseFormHook = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    callback();
  };

  const onSwitchChange = name => e => {
    setValues({ ...values, [name]: e.target.checked });
  };

  return {
    onChange,
    onSubmit,
    onSwitchChange,
    values,
    setValues
  };
};
export default UseFormHook;
