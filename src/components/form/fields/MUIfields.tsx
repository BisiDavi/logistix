import React from 'react';
import { TextField } from '@material-ui/core';

export const TextInput = ({ field, formik }) => {
    return (
        <TextField
            id={field.name}
            fullWidth
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            name={field.name}
            type={field.type}
            label={field.placeholder}
            error={
                formik.touched[field.name] && Boolean(formik.errors[field.name])
            }
            helperText={formik.touched[field.name] && formik.errors[field.name]}
        />
    );
};
