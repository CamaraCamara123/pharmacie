import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div style={{ backgroundColor: 'grey',maxHeight:'750px', minHeight:'700px' }}>
      <Container id="home">
        <Slide direction="left">
          <Texts>
            <h4>
              Salut <span className="green" style={{ color:'green'}}>Nous sommes</span>
            </h4>
            <h1 className="green">le groupe 11 composé de :</h1>
            <h3>Camara Aboudramane<br />
              Othman El Idrissi<br />
              Ohami Mohamed
            </h3>
            <div style={{ justifyContent: "center", }}>
              <p>
                Le projet de développement d'une application de recherche de pharmacie de garde, réalisé par Camara Aboudramane, Othman El Idrissi et Ouhami Mohamed, est une application innovante créée avec la technologie React JS.
                Cette application permet aux utilisateurs de trouver facilement et rapidement les pharmacies de garde les plus proches de leur emplacement. Elle offre une interface conviviale et intuitive, permettant aux utilisateurs de rechercher les pharmacies de garde en fonction de leur ville, de leur zone et du type de garde (jour ou nuit).
                Grâce à la technologie React JS, l'application garantit une expérience utilisateur fluide et réactive. Elle utilise des composants réutilisables, facilitant ainsi la gestion et la maintenance du code. De plus, React JS permet de créer des interfaces interactives et dynamiques, offrant ainsi une expérience utilisateur optimale.

              </p>
            </div>            {/* <button>En savoir plus</button> */}
            <Social>
              <p>Visitez notre</p>
              <div className="social-icons">
                <span>
                  <a href="https://instagram/">
                    <AiOutlineInstagram />
                  </a>
                </span>
                <span>
                  <a href="https://web.facebook.com/">
                    <FaFacebook />
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/">
                    <FaLinkedinIn />
                  </a>
                </span>
              </div>
            </Social>
          </Texts>
        </Slide>
        <Slide direction="right">
          <Profile>
            <img
              src="pharmacie.jpeg"
              alt="profile"
            />
          </Profile>
        </Slide>
      </Container>
    </div>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "New Time Roman", sans-serif;
    letter-spacing: 2px;
    font-weight: bolder;
  }
  h3 {
    font-weight: 500;
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    font-family:"fantasy"
  }
  p {
    font-weight: 300;
    font-family:"New Time Roman";
    text-align: justify;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
