import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Navbar.css';

function Footer() {
    return (
        <footer className="">
            <Container style={{width:'100%'}} fluid>
                <Row>
                    <Col xs={12} md={6} className='d-flex-left'>
                        <p>© Pharmacie de garde</p>
                    </Col>
                    <Col xs={12} md={6} className='d-flex-right'>
                        <ul className="list-inline text-md-right">
                            <li className="list-inline-item">
                                <a href="https://facebook.com/"><i className="fab fa-facebook fa-lg"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://twitter.com/"><i className="fab fa-twitter fa-lg"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://instagram.com/"><i className="fab fa-instagram fa-lg"></i></a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
