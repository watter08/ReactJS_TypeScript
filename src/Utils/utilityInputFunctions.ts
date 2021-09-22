

export const getInputValue = (input : any) => {
    if (input && input.type === "checkbox") {
      return input.checked ? 1 : 0;
    }

    if (input && input.type === "date") {
      return input.value.toString();
    }

    if (input && input.type === "file") {
      return input.files;
    }
    return input.value;
  };