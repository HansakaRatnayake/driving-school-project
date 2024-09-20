import React from 'react'
import {useField, useFormikContext} from "formik";
import {MenuItem, TextField} from "@mui/material";



const SelectCustom = ({
    name,
    options,
    ...otherProps
}) => {

    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    
  const handleChange = event => {
        const { value } = event.target;
        setFieldValue(name, value);
    };

    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        variant: 'outlined',
        fullWidth: true,
        onChange: handleChange,
        size: "medium",
        margin:"dense"
    }


    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = mata.error;
    }

    return (
        <TextField {...configSelect}>

            {Array.isArray(options) && options.length > 0 ? (
                options.map((option,i) => (
                    <MenuItem key={i} value={option}>
                        {option.name}
                    </MenuItem>
                ))
            ) : (
                <MenuItem value="">
                    <em>No options available</em>
                </MenuItem>
            )}

        </TextField>
    )
}

export default SelectCustom;
