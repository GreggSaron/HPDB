import React from 'react';

import './cardsContainer.css';

import CharacterCard from '../cards/characterCard';
import SpellCard from '../cards/spellCard';
import PotionCard from '../cards/potionCard';

interface WikiProps {
    type: 'characters' | 'spells' | 'potions'
}

const CardsContainer:React.FC<WikiProps> = ({ type }): JSX.Element => {
    return (
        <div className="cards-container">
            {type === 'characters' ?
                <React.Fragment>
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />                    
                </React.Fragment> 
                : null
            }
            {type === 'spells' ? 
                <React.Fragment>
                    <SpellCard />
                    <SpellCard />
                    <SpellCard />
                    <SpellCard />
                    <SpellCard />
                    <SpellCard />                    
                </React.Fragment>
                : null
            }
            {type === 'potions' ? 
                <React.Fragment>
                    <PotionCard />
                    <PotionCard />
                    <PotionCard />
                    <PotionCard />
                    <PotionCard />
                    <PotionCard />
                </React.Fragment>
                : null
            }
        </div>
    )
};

export default CardsContainer;