import React from 'react';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@material-ui/core';

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

export const MUISelect = ({ field, formik }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id={field.name}>{field.placeholder}</InputLabel>
            <Select
                onChange={formik.handleChange}
                value={formik.values[field.name]}
                id={field.name}
                name={field.name}
            >
                {field.options.map((item, index) => (
                    <MenuItem key={index} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
