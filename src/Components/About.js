import {Container, Row, Col} from 'react-bootstrap';
import yolande from '../assets/img/yolandebird.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

export const About = () => {

    return(
        <section className='box' id="about">
            <Container>
                <Row>
                    <h1>About Me</h1>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <p id="bio">My name is Yolande Bird and I am a Life Coach based in Durban North and Umhlanga. I am passionate about helping people reach their full potential. I am fluent in both English and Afrikaans.</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src={yolande} className="img-fluid" alt="Yolande Bird Life Coach"/>
                    </Col>
                </Row>
            </Container>
            <br/><br/>
        </section>
    );
}