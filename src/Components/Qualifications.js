import {Container, Row, Col, Carousel, CarouselItem} from 'react-bootstrap';
import qualifications from '../assets/img/pexels-emily-ranquist-1205651.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Qualifications = () => {

    return(
        <section className='box' id="qualifications">
            <Container>
                <Row>
                    <h1>My Qualifications</h1>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Carousel fade>
                        <CarouselItem>
                                <img src={qualifications} className="img-fluid grad" alt="Graduation"/>
                                <Carousel.Caption>
                                        <p><mark>BA Psych - Bachelor of Arts in Psychology</mark></p>
                                        <p><mark>I have successfully completed a Bachelors Degree in Psychology at<br/> 
                                            <a href="https://www.unisa.ac.za">UNISA</a> - University of South Africa.</mark></p>  
                                </Carousel.Caption>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={qualifications} className="img-fluid grad" alt="Graduation"/>
                                <Carousel.Caption>
                                    <p><mark>Hon Psych - Honours Degree in Psychology</mark></p>
                                    <p><mark>I have successfully completed an Honours Degree in Psychology at<br/> 
                                        <a href="https://www.unisa.ac.za">UNISA</a> - University of South Africa.</mark></p>
                                </Carousel.Caption>
                            </CarouselItem>
                            <CarouselItem>
                                <img src={qualifications} className="img-fluid grad" alt="Graduation"/>
                                <Carousel.Caption>
                                        <p><mark>Life Coaching Course</mark></p>
                                        <p><mark>I have successfully completed a Life Coaching Course via the <a href="https://www.inst.org/">Blackford Centre</a>.</mark></p>  
                                </Carousel.Caption>
                            </CarouselItem>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}