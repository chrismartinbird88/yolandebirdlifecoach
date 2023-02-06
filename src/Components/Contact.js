import React from 'react';
import emailjs from 'emailjs-com';
import {Form, Input, TextArea, Button} from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { useState } from 'react';
import {Container, Row, Col, Accordion, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SERVICE_ID = "yolandebirdcounsellor";
const TEMPLATE_ID = "template_5t2q8jg";
const USER_ID = "KjRM0CF4SD1FNe0Ge";
const PUBLIC_KEY = 'KjRM0CF4SD1FNe0Ge';

export const Contact = () => {

    const [setForm] = useState('Submit');
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setForm('Submitting ...')
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent Successfully'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Oops, something went wrong',
                text: error.text,
            })
        });
        e.target.reset()
    };

    return (
        <section className="box container-fluid" id="contact">
            <Container>
                <br/>
                <br/>
                <Row>
                    <h1>Contact Me</h1>
                </Row>
                <br/>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <h1>Contact Form:</h1>
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Field
                                id='form-input-control-name'
                                control={Input}
                                name='name'
                                placeholder='Name...'
                                required    
                            />
                            <br/>
                            <Form.Field
                                id='form-input-control-email'
                                control={Input}
                                name='email'
                                placeholder='Email...'
                                required    
                            />
                            <br/>
                            <Form.Field
                                id='form-textarea-control-message'
                                control={TextArea}
                                name='message'
                                placeholder='Message...'
                                rows='10'
                                required    
                            />
                            <br/>
                            <Button type='submit'>Submit</Button> 
                        </Form>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <h1>Additional Information:</h1>
                        <Accordion>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>My Business Hours</Accordion.Header>
                                <Accordion.Body>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Days</th>
                                                <th>Hours</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tuesdays</td>
                                                <td>08:00 - 12:00</td>
                                            </tr>
                                            <tr>
                                                <td>Wednesday</td>
                                                <td>12:00 - 16:00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Excluding Public Holidays</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>Payment Method</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        I charge the following rates:<br/>
                                        R300 per private session.<br/>
                                        Please note there are no card facilities available. Only cash payments will be accepted.<br/>
                                        If you wish to cancel your session please do so at least 24 hours ahead of time.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>

                
        </section>
    );
}