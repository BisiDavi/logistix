import { Form, Col, InputGroup } from 'react-bootstrap';
import { FaMapMarker } from 'react-icons/fa';
import styles from '@styles/form.module.css';

export function Input({ field, formik }) {
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
}

export function PrependInput({ icon, field, formik, inputRef }) {
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
}

function displayFormIcons(icon) {
    switch (icon) {
        case 'map':
            return <FaMapMarker />;
        default:
            return null;
    }
}

export function RadioButton({ field }) {
    return (
        <Form.Group className='d-flex radioButton'>
            {field.labels.map(function (item, index) {
                return (
                    <div key={index} className='mb-3'>
                        <Form.Check
                            type='radio'
                            value={item}
                            inline-label={item}
                        />
                    </div>
                );
            })}
        </Form.Group>
    );
}

export function SelectInput({ field }) {
    return (
        <Form.Group as={Col} controlId={field.name}>
            <Form.Control as='select' defaultValue={field.placeholder}>
                {field.options.map(function (item, index) {
                    return <option key={index}>{item}</option>;
                })}
            </Form.Control>
        </Form.Group>
    );
}
