import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Navbar.css';
import './App.css';

const About = () => {
  return (
    <div style={{ minHeight: '650px', maxHeight: '750px' }}>
      <Container className='main-row-contact animated-border'>
        <h1 className='tracking-in-expand-fwd-top' style={{ fontFamily: 'fantasy', color: 'green' }}>
          A PROPOS DE NOUS
        </h1>
        <Row className='mt-4'>
          <Col md={6}>
            <h3 className='tracking-in-expand-fwd-top'>Qui sommes nous ?</h3>
            <Container className='main-row-container-1'>
              <p>
                L'histoire de la pharmacie débute un peu plus tard que celle de la médecine alors que les médecins de
                l'époque utilisaient des méthodes peu communes de nos jours pour « rétablir les humeurs » présentes dans
                le corps. L'ancêtre du pharmacien, l'apothicaire est repéré dès 2600 av. J.-C. à Sumer où des textes
                médicaux, mêlés à des incantations religieuses1, sont attestés sur deux tablettes d'argile dont les
                cunéiformes mentionnent
              </p>
            </Container>
          </Col>
          <Col md={6}>
            <h3 className='tracking-in-expand-fwd-top'>Que faisons nous ?</h3>
            <Container className='main-row-container-1'>
              <p>
                L'histoire de la pharmacie débute un peu plus tard que celle de la médecine alors que les médecins de
                l'époque utilisaient des méthodes peu communes de nos jours pour « rétablir les humeurs » présentes dans
                le corps. L'ancêtre du pharmacien, l'apothicaire est repéré dès 2600 av. J.-C. à Sumer où des textes
                médicaux, mêlés à des incantations religieuses1, sont attestés sur deux tablettes d'argile dont les
                cunéiformes mentionnent
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
