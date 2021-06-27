import React, { useState } from 'react';
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
    Input,
    IconButton,
    InputAdornment,
    FormHelperText,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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

export function TextInput({ index, formik, field }) {
    return (
        <TextField
            id={field.name}
            fullWidth
            key={index}
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
}

export function MUISelect({ index, formik, field }) {
    return (
        <FormControl fullWidth>
            <InputLabel id={field.name}>{field.placeholder}</InputLabel>
            <Select
                onChange={formik.handleChange}
                value={formik.values[field.name]}
                id={field.name}
                key={index}
                name={field.name}
                error={
                    formik.touched[field.name] &&
                    Boolean(formik.errors[field.name])
                }
            >
                {field.options.map(function (item, index) {
                    return (
                        <MenuItem value={item} key={index}>
                            {item}
                        </MenuItem>
                    );
                })}
            </Select>
            <FormHelperText>
                {formik.touched[field.name] && formik.errors[field.name]}
            </FormHelperText>
        </FormControl>
    );
}

export function MUIRadio({ index, formik, field }) {
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
                key={index}
                name={field.name}
                className={classes.radioGroup}
            >
                {field.labels.map(function (item, index) {
                    return (
                        <FormControlLabel
                            value={item}
                            key={index}
                            control={<Radio />}
                            label={item}
                        />
                    );
                })}
            </RadioGroup>
        </FormControl>
    );
}

export function PasswordField({ index, formik, field }) {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    function handleClickShowPassword() {
        setShowPassword(!showPassword);
    }

    function handleMouseDownPassword(
        event: React.MouseEvent<HTMLButtonElement>,
    ) {
        return event.preventDefault();
    }

    const inputType = showPassword ? 'text' : 'password';

    return (
        <FormControl>
            <InputLabel htmlFor={field.name}>{field.placeholder}</InputLabel>
            <Input
                type={inputType}
                fullWidth
                key={index}
                name={field.name}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                error={
                    formik.touched[field.name] &&
                    Boolean(formik.errors[field.name])
                }
                endAdornment={
                    <InputAdornment position='end'>
                        <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <FormHelperText>
                {formik.touched[field.name] && formik.errors[field.name]}
            </FormHelperText>
        </FormControl>
    );
}
