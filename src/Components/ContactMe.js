import React from 'react';
import { FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState,useEffect } from 'react';
import AlertNotify from './AlertNotify';





const ContactMe = (props) => {
    const form = useRef();
    const [showAlert, setShowAlert] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_atc5o2f', 'template_6s2yu7b', form.current, 'DynTbqUfLEHul8rAK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    const handleClick = (e) => {
        e.preventDefault();
        setShowAlert(!showAlert);
    }

    useEffect(() => {
        if (showAlert) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        }
    }, [showAlert]);



    return (
        <>
        <div> 
            {showAlert && <AlertNotify />}
        </div>
            <Form id="contact" ref={form} onSubmit={sendEmail}>
                <FormGroup>
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="mb-3" type="text" placeholder="Name" />
                </FormGroup>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Text me</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button onClick={handleClick} as="input" type="submit" value="Submit" />
            </Form>
        </>

    );
};

export default ContactMe;