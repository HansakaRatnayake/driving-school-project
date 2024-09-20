import React from 'react'
import { useField } from 'formik';
import {TextField} from "@mui/material";

const TextFieldCustom = ({name,...otherProps}) => {

    const [field, mata] = useField(name);

    const confixTextField = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined',
        size:"medium",
        margin:"dense"
        // InputProps: {
        //   style: {
        //     height: '50px', // Set your custom height here
        //   },
        // }
        
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
