import { useState } from 'react';

import '../cards.css';
import './spellCard.css';

import MissingSpellIcon from '../../../assets/MissingSpell.svg'

function SpellCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="card" onClick={openModal}>
                <img className="card-image" src={MissingSpellIcon}/>
                <p>Expelliarmus</p>
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

export default SpellCard;