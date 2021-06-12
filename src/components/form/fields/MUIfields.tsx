import React from 'react';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    MenuItem,
    makeStyles,
} from '@material-ui/core';

import styles from './MUIfields.module.css';

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
                error={
                    formik.touched[field.name] &&
                    Boolean(formik.errors[field.name])
                }
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
const useStyles = makeStyles({
    formControl: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    legend: {
        marginBottom: 0,
        width: 'fit-content',
        marginRight: '50px',
    },
    radioGroup: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export const MUIRadio = ({ field, formik }) => {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl} component='fieldset'>
            <FormLabel className={classes.legend} component='legend'>
                {field.name}
            </FormLabel>
            <RadioGroup
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                aria-label={field.name}
                name={field.name}
                className={classes.radioGroup}
            >
                {field.labels.map((item, index) => (
                    <FormControlLabel
                        key={index}
                        value={item}
                        control={<Radio />}
                        label={item}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};
