import React from 'react'
import {useFormikContext} from "formik";
import {Button} from "@mui/material";

const ButtonCustom = ({
    children,
    ...otherProps
}) => {

    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton = {
        ...otherProps,
        variant: 'contained',
        color: 'primary',
        fullWidth: true,
        onClick: handleSubmit,
        size:"small"
    }
    
  return (
    <Button {...configButton} >
        {children}
    </Button>
  )
}

export default ButtonCustom;


