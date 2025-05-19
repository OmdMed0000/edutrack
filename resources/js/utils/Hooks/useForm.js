import { useCallback, useState } from 'react';

const useForm = (initialValues, validationRules = {},typeForm) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });  
  };

  const handleFocus = (name) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear error for the focused field
    }));
   
  };

  const isSubmitDisabled = useCallback(()=>{
    
    if (typeForm === 'add') {
      const isEmptyFields = Object.keys(values).some(key => values[key] === '')
      if (isEmptyFields) return isEmptyFields

      
    }
    if (typeForm === 'edit') {
      return !Object.keys(values).some((key) => values[key] !== initialValues[key]);
    }
    
  },[values,initialValues,typeForm])



  // Handle form submission
  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    if (validate()) {
      callback(); 
      // Execute the callback function (e.g., API call)
    }
  };
  
  const resetForm = ()=>{
    setValues(initialValues);
    setErrors({});
  }
  // Validation using regex
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    Object.keys(values).forEach((key) => {

      // Check regex rules if defined
      if (validationRules[key]?.regex && values[key]) {
        const { regex, message } = validationRules[key];
        if (!regex.test(values[key])) {
          tempErrors[key] = message || `${key} is invalid`;
          isValid = false;
        }
      }

      if (validationRules[key]?.validateFunc) {
        const { validateFunc, message } = validationRules[key];
        if (!validateFunc(values[key])) {
          tempErrors[key] = message || `${key} is invalid`;
          isValid = false;
        }
      }
      if (validationRules[key]?.check) {
        const { check, message } = validationRules[key];
        // Only run the check if the field we depend on (e.g., "password") has no errors and 
        const isCheckTargetValid = !tempErrors[check];

        if (isCheckTargetValid && values[key] !== values[check]) {
          tempErrors[key] = message || `${key} does not match ${check}`;
          isValid = false;
        }
        
      }
    });

    setErrors(tempErrors);
    return isValid;
  };

  return {
    values,
    errors,
    handleChange,
    handleFocus,
    handleSubmit,
    isSubmitDisabled, 
    resetForm
  };
};

export default useForm;