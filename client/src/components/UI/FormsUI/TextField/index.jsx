import React from 'react'
import { useField } from 'formik';
import {TextField} from "@mui/material";

const TextFieldCustom = ({
    name,
    ...otherProps
}) => {

    const [field, mata] = useField(name);

    const confixTextField = {
        ...field,
        ...otherProps,
        fullWidth: true,
        varient: 'outlined',
        size:"small"
    }

    if(mata && mata.touched && mata.error){
        confixTextField.error = true;
        confixTextField.helperText = mata.error;
    }

  return (
    <TextField {...confixTextField} />
  );
}

export default TextFieldCustom;
