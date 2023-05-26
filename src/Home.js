import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import Map from './Map';
import CardPharma from './CardPharma';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Slide } from "react-awesome-reveal";

function Cities(props) {
  return (
    <option key={props.element._id} value={props.element._id}>
      {props.element.name}
    </option>
  );
}

function Zones(props) {
  return (
    <option key={props.element._id} value={props.element._id}>
      {props.element.name}
    </option>
  );
}

const Home = () => {
  const [cities, setCities] = useState([]);
  const [zones, setZones] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedOption, setSelectedOption] = useState('Jour');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSelected, setIsSelected] = useState(true);
  const [mapKey, setMapKey] = useState(Date.now());

  useEffect(() => {
    fetch('https://motionless-blue-bee.cyclic.app/api/cities', { mode: 'cors' })
      .then((result) => result.json())
      .then((data) => {
        setCities(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChangeCities = (event) => {
    const city_id = event.target.value;
    setSelectedCity(city_id);
    const uri = `https://motionless-blue-bee.cyclic.app/api/zones/city/${city_id}`;
    fetch(uri)
      .then((result) => result.json())
      .then((data) => {
        setZones(data);
        setIsDisabled(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeZones = (event) => {
    const zone_id = event.target.value;
    setSelectedZone(zone_id);
    setIsSelected(false);
  };

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const uri = `https://motionless-blue-bee.cyclic.app/api/pharmacies/garde/${selectedOption}`;
    fetch(uri)
      .then((result) => result.json())
      .then((data) => {
        const finalArray = data.filter((element) => {
          return element.zone._id == selectedZone;
        });
        setPharmacies(finalArray);
        setMapKey(Date.now());
      });
  };

  return (
    <>
      <Row style={{ margin: 'auto', marginTop: '20px' }}>
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit} style={{fontFamily:'fantasy', backgroundColor:'yellow', borderBlockColor:'green',borderRadius:'15px'}}>
            <Row>
              <Col>
                <Form.Group controlId='Cities'>
                  <Form.Control as='select' onChange={handleChangeCities}>
                    <option value=''>Villes</option>
                    {cities.map((city) => (
                      <Cities element={city} />
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='Zones'>
                  <Form.Control
                    as='select'
                    aria-label='Zones'
                    onChange={handleChangeZones}
                    disabled={isDisabled}
                  >
                    <option>zones</option>
                    {zones.map((zone) => (
                      <Zones element={zone} />
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='Garde'>
                  <Form.Control
                    as='select'
                    aria-label='Garde'
                    onChange={handleOptionChange}
                    value={selectedOption}
                    disabled={isSelected}
                  >
                    <option value='Jour'>Jour</option>
                    <option value='Nuit'>Nuit</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col style={{ alignItems: 'center' }}>
                <Button type='submit' disabled={isSelected}>
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
          <Row className='' style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
            <Carousel
              showThumbs={false}
              showArrows={true}
              slidesToShow={1}
              infiniteLoop={true}
              swipeable={true}
              emulateTouch={true}
              centerMode={true}
              showIndicators={true}
              autoPlay={false}
              interval={3000}
              transitionTime={500}
              swipeScrollTolerance={5}
            >
              {pharmacies.map((elt) => (
                <CardPharma element={elt} key={elt._id} />
              ))}
            </Carousel>
          </Row>
        </Col>
        <Col xs={12} md={6} style={{ marginBottom: '3px', maxHeight: '460px' }} className='container scale-in-ver-top'>
          <Map pharmacies={pharmacies} key={mapKey} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
