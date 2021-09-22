import React, { useEffect, useState } from "react";
	import { getInputValue  } from "../Utils/utilityInputFunctions";
	
	const useForm = (initialState : any, validations : any , onSubmit : Function) => {
	  const [state, setState] = useState(initialState);
	  const [errors, setStateErrors] = useState({});
	
	  const getInputErrorMessage = (input : any, validations : any) => {
	    const { name, value } = input;
	    const errorsMessage = validations[name](value);
	    return errorsMessage;
	  };
	  const getFormErrorMessages = (data : any, validations : any) => {
	
	    const validationErrors :  any = {};
	
	    for(let validationName in validations){
	       let errorMessage= validations[validationName](data[validationName]);
	
	       if(errorMessage){
	        validationErrors[validationName]=errorMessage;
	       } 
	        
	    }
	    return validationErrors;
	  };
	
	  const handleChangeInput = ({ currentTarget: input  } : any): any => {
	    const value = getInputValue(input);
	    const { name } = input;
	    const errorMessage = getInputErrorMessage(input, validations);
	
	    const newErrors : any = { ...errors };
	
	    if (errorMessage) {
	      setStateErrors((errors) => ({ ...newErrors, [name]: errorMessage }));
	    } else {
	      delete newErrors[name];
	      setStateErrors((errors) => ({ ...newErrors, [name]: errorMessage }));
	    }
	    setState((data : any) => ({ ...data, [name]: value }));
	  };
	  const handleSubmit = () => {
	      const formErrorMessages = getFormErrorMessages(state, validations);
	      const errorMessagesCount = Object.entries(formErrorMessages).length;
	
	
	    if (errorMessagesCount>0) {
	      return setStateErrors( formErrorMessages);
	    } 
	    setStateErrors({});
	    onSubmit(state);
	  };
	
	  return {  handleChangeInput, handleSubmit,errors, state, setState };
	
	};
	
	export default useForm;
