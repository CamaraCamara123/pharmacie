import React from 'react'
import { useState } from 'react';

function DetailPharmacie(props) {
    const [open, setOpen] = useState(true);

    const openPup = () => {
        setOpen(true);
    };

    const closePup = () => {
        setOpen(false);
    };
    return (
        <div className='popup-overlay'>
            <div className='popup-content' style={{ border: '4px', fontFamily: 'fantasy' }}>
                <button className='close-button' onClick={closePup} style={{ backgroundColor: 'red', color: 'white', borderRadius: '50%', marginBottom: '10px', marginTop: '0px' }}>
                    X
                </button>
                <h3 style={{ color: 'blue' }}>{props.element.nom}</h3>
                <div style={{ alignContent: 'flex-start', border: '' }}>
                    <p>
                        <strong>Localisation : </strong><br />
                        {props.element.adresse}
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
    )
}

export default DetailPharmacie
