import {Container, Accordion, Row, Col} from 'react-bootstrap';
import yolande from '../assets/img/yolandebird.webp';
import session from '../assets/img/pexels-christina-morillo-1181719.webp';
import phone from '../assets/img/pexels-anthony-shkraba-5206297.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {

    return(
        <section className="box" id="home">   
            <br/><br/>         
            <Container>
                <Row>
                    <h1>Welcome</h1>
                    <h2>Yolande Bird - Life Coach serving the Durban North and Umhlanga areas.</h2>
                </Row>
                <Row>
                    <blockquote>
                        What holds most people back is not the quality of their ideas,<br/>
                        but their lack of faith in themselves. You have to live your<br/>
                        life as if you are already where you want to be.<br/>
                        <cite> ~ Russell Simmons</cite>
                    </blockquote>
                </Row>
                <Row>
                    <span>Click on the accordion below to see a brief overview of this website</span>
                    <Accordion>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>About Section</Accordion.Header>
                            <Accordion.Body>
                                <p>Here you can find out more about me and my qualifications</p>
                                <blockquote>
                                    The tragedy in life does not lie in not reaching<br/>
                                    your goal. The tragedy lies in having no goal to reach.<br/>
                                    <cite>~ Benjamin Mays</cite>
                                </blockquote>
                                <img src={yolande} className="img-fluid" alt="Yolande Bird Life Coach"/>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Benefits Section</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col sm={12} xs={12}>
                                        <p>Here you can find out more about the benefits when making use of a Life Coach</p>
                                        <blockquote>
                                            If something is important enough, even if the odds are 
                                            stacked against you, you should still do it.
                                            <cite>~ Elon Musk</cite>
                                        </blockquote>
                                    </Col>
                                    <Col sm={12} xs={12}>
                                        <img src={session} className="img-fluid" alt="Life Coach Session"/>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>Contact Section</Accordion.Header>
                            <Accordion.Body>
                                <p>Here you will find the following information:</p>
                                <ul>
                                    <li>The geolocation of my office.</li>
                                    <li>My office hours.</li>
                                    <li>Payment information.</li>
                                    <li>Contact Form</li>
                                </ul>
                                <img src={phone} className="img-fluid" alt="Person contacting a life coach."/>                                        
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Container>
        </section>
    );
}