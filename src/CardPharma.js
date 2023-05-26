import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './Navbar.css';
import './Popup.css';

function CardPharma(props) {
  const [open, setOpen] = useState(false);

  const openPup = () => {
    setOpen(true);
  };

  const closePup = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='scale-in-ver-top'>
        <Card
          style={{
            width: '14rem',
            height: 'auto',
            outlineStyle: 'outset',
            border: '',
            marginBottom: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            fontFamily: 'cursive'
          }}
          className='shadow-pop-tr carte'
        >
          <Card.Img
            variant='top'
            src='pharmaciegarde.jpg'
            style={{ width: '14rem', height: 'auto', marginLeft: '0' }}
          />
          <Card.Body>
            <Card.Title className='tracking-in-expand-fwd-top carte-title'>
              <b>{props.element.nom}</b>
            </Card.Title>
            <Card.Text
              style={{ lineHeight: '4px', marginTop: '15px', textAlign: 'center' }}
            >
              <p>
                <strong>Zone : </strong>
                {props.element.zone.name}
              </p>
              <p>
                <strong>Garde : </strong>
                {props.element.gardes
                  .map((element) => {
                    return element.type;
                  })
                  .join(' et ')}
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer className='btn' style={{ border: '0px' }}>
            <button style={{ width: '100%', height: '100%' }} className='btn btn-light' onClick={openPup}>
              <small className='text-muted'>Lire</small>
            </button>
          </Card.Footer>
        </Card>
        {open && (
          <div className='popup-overlay'>
            <div className='popup-content' style={{ border: '4px', fontFamily: 'fantasy' }}>
              <button className='close-button' onClick={closePup} style={{ backgroundColor: 'red', color: 'white', borderRadius: '50%', marginBottom: '10px', marginTop: '0px' }}>
                X
              </button>
              <h3 style={{ color: 'blue' }}>{props.element.nom}</h3>
              <div style={{ alignContent: 'flex-start', border: '' }}>
                <p>
                  <strong>Localisation : </strong>
                  {props.element.zone.name}
                </p>
                <p>
                  <strong>Garde : </strong>
                  {props.element.gardes
                    .map((element) => {
                      return element.type;
                    })
                    .join(' et ')}
                </p>
                <p style={{ fontFamily: 'fantasy', color: 'green' }}><b>Pharmacies de garde toujours plus proche de vous !!!</b></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CardPharma;
