import { useState } from 'react';

import MissingPotionIcon from '../../../assets/MissingPotion.svg'

import '../cards.css';
import './potionCard.css';

function PotionCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="card" onClick={openModal}>
                <img className="card-image" src={MissingPotionIcon}/>
                <p>Felix Felicis</p>
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
        </>
    );
}

export default PotionCard;