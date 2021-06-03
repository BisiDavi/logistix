import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FaMapMarker } from 'react-icons/fa';
import { Button } from '@components/.';

const DeliveryForm = () => {
    return (
        <Form>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <FaMapMarker />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control placeholder='Enter Address' />
            </InputGroup>
            <Button text='Order' />
        </Form>
    );
};

export default DeliveryForm;
