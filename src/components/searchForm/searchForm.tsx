import './searchForm.css';

import React from 'react';

import CardsContainer from '../cardsContainer';

import WandIcon from '../../assets/Wand.png'

interface WikiProps {
    type: 'characters' | 'spells' | 'potions'
}

const SearchForm: React.FC<WikiProps> = ({ type }): JSX.Element => {

    return (
        <React.Fragment>
            <div className="search-form">
                <input
                className='search-form-input'
                    type="text"
                    placeholder="Поройтесь в омуте памяти"
                    value={undefined}
                    onChange={() => {}}
                />
                <button className='search-form-button' type="submit">
                    <img className='search-form-button-image' src={WandIcon} />
                </button>
            </div>
            <CardsContainer type = {type}/> 
        </React.Fragment>
    )
};

export default SearchForm;
