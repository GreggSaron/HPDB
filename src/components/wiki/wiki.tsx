import { Link } from 'react-router-dom';
import './wiki.css';

const Wiki = () => {
    return (
        <div className="wiki-container">
            <div className="wiki-nav">
                <Link to="/wiki/characters" className="wiki-nav-characters">Characters</Link>
                <Link to="/wiki/spells" className="wiki-nav-spells">Spells</Link>
                <Link to="/wiki/potions" className="wiki-nav-Potions">Potions</Link>
            </div>
            <div className="wiki-content">
            </div>
        </div>
    )
};



export default Wiki;


