import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import benefit from '../assets/img/pexels-natasha-fernandez-811575.webp';

export const Benefits = () => {

    return(
        <section className='box' id="benefits">
            <Container>
                <Row>
                    <h1>Benefits</h1>
                    <p>There are many benefits of making use of a Life Coach. 
                        The following list contains a few examples of benefits:</p>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                        <ul id="benefit-list">
                          <li>Obtain a balance between work and life.</li>
                          <li>Help you identify work/life goals.</li>
                          <li>identify any negative attitudes you<br/>
                               may have that can limit your chance<br/> 
                               of success.</li>
                          <li>Enable you to communicate more effectively.</li>
                          <li>Improve your chances of landing your dream job<br/>
                              or getting promoted.</li>
                          <li>Help you achieve your weight loss goals(if you<br/>
                               have any).</li>
                          <li>Establish a clear financial plan in order<br/> 
                              to achieve independence</li>
                          <li>Help you start or expand your business.</li>
                          <li>Enable you to make better use of the <br/>
                              connections you may have.</li>
                          <li>Setting up a professional or personal growth plan.</li>
                      </ul>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                        <img src={benefit} className="img-fluid" alt="Inpsirational Clipboard"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}