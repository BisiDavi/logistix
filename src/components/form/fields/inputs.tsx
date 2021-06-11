import { Form, Col, InputGroup } from 'react-bootstrap';
import { FaMapMarker } from 'react-icons/fa';
import styles from '@styles/form.module.css';

export const Input = ({ field, formik }) => {
    return (
        <Form.Group className={styles.formGroup}>
            <Form.Control
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                isValid={
                    formik.touched[field.name] &&
                    !Boolean(formik.errors[field.name])
                }
            />
            <Form.Control.Feedback
                className='d-block text-center'
                type='invalid'
            >
                {formik.errors[field.name]}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

export const PrependInput = ({ icon, field, formik }) => {
    return (
        <InputGroup>
            <InputGroup.Prepend className={styles.prepend}>
                <InputGroup.Text className={styles.text}>
                    {displayFormIcons(icon)}
                </InputGroup.Text>
            </InputGroup.Prepend>
            <Input field={field} formik={formik} />
        </InputGroup>
    );
};

const displayFormIcons = (icon) => {
    switch (icon) {
        case 'map':
            return <FaMapMarker />;
        default:
            return null;
    }
};

export const RadioButton = ({ field }) => {
    return (
        <Form.Group className='d-flex radioButton'>
            {field.labels.map((item, index) => (
                <div key={index} className='mb-3'>
                    <Form.Check type='radio' value={item} inline-label={item} />
                </div>
            ))}
        </Form.Group>
    );
};

export const SelectInput = ({ field }) => {
    return (
        <Form.Group as={Col} controlId='formGridState'>
            {/*<Form.Label>{field.text}</Form.Label>*/}
            <Form.Control as='select' defaultValue={field.placeholder}>
                {field.options.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </Form.Control>
        </Form.Group>
    );
};
