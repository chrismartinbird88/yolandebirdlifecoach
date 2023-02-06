import {Container, Row, Col, Accordion, Table} from 'react-bootstrap';            
import businessCard from '../assets/img/business-card.webp';

export const Practice = () => {

    return (
        <section className="banner container-fluid" id="practice">
            <h1>Additional Information About My Practice</h1>
            <Container>
                <Row>
                    <Col>
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
    )
}