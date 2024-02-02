import { useState } from 'react';
import React from 'react';

import MissingCharacterIcon from '../../../assets/MissingCharacter.svg';

import '../cards.css';
import './characterCard.css';

function CharacterCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <React.Fragment>
            <div className="card" onClick={openModal}>
                <img className="card-image" src={MissingCharacterIcon}/>
                <p>Harry Potter</p>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        test 
                        <button className="close-modal" onClick={closeModal}>×</button>
                        test 2
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default CharacterCard;