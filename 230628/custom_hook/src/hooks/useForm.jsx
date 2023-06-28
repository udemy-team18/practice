import { useState } from "react";

const useForm = (initialValue) => {
  const [values, setValue] = useState(initialValue);
  const handleChange = (event) => {
    const [name, value] = event.target;
    setValue((preValues) => ({ ...preValues, [name]: value }));
  };
  const resetForm = () => {
    setValue(initialValue);
  };
  return {values, handleChange, resetForm};
};

export default useForm;
