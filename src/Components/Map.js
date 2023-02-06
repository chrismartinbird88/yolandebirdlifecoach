import React from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Map = () => {
  
    return (
        <section className="box container-fluid" id="map">
            <Container>
                <h1>Where To Find Me:</h1>
                <div className='google-map-code'>
                    <iframe title="Regent Medical Center Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1731.5695877493715!2d31.051180251409118!3d-29.773616938265416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7064132254b4d%3A0x916bf8df2d17f08a!2sRegent%20medical%20centre!5e0!3m2!1sen!2sza!4v1666352090436!5m2!1sen!2sza" width="100%" height="475px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Container>
        </section>
    )
}