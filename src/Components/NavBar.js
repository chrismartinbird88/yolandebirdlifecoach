import { useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/logo.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar id="nav" expand="lg" fixed-top className={scrolled ? "scrolled": ""}>
      <Container>
            <Navbar.Brand href="/">
                    <img src={logo} className="logo" alt="Yolande Bird Life Coach Logo"/>
                    <span>Yolande Bird - Life Coach</span>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#benefits" className={activeLink === 'benefits' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('benefits')}>Benefits</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}