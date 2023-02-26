import "../styles/destination.css";
import data from '../data.json';
import {useState} from 'react';


const Destination = () => {
    const [planet, setPlanet] = useState(data.destinations[0]);
    const changePlanet = (e) => {
        setPlanet(data.destinations[e.target.id]);
        document.querySelectorAll('.option-tabs li').forEach((item) => {
            item.classList.remove('active');
        });
        e.target.classList.add('active');
    }

    return (
        <div className="destination-main">
            <h1 className="destination-head-title"><span>01 </span>Pick your destination</h1>
            <picture className="main-img" key={planet.images.png}>
                <source className="planet-img" srcSet={planet.images.webp} />
                <img className="planet-img" src={planet.images.png} alt={planet.name}/>
            </picture>
            <div className="planet-details">
                <ul className="option-tabs">
                    <li id="0" className="active" onClick={changePlanet}>Moon</li>
                    <li id="1" onClick={changePlanet}>Mars</li>
                    <li id="2" onClick={changePlanet}>Europa</li>
                    <li id="3" onClick={changePlanet}>Titan</li>
                </ul>
                <div className="planet-info" key={planet.name}>
                    <h2>{planet.name}</h2>
                    <p>{planet.description}</p>
                    <hr className="divider"/>
                    <div className="planet-stats">
                        <div className="distance">
                            <h6>AVG. DISTANCE</h6>
                            <p>{planet.distance}</p>
                        </div>
                        <div className="time">
                            <h6>Est. travel time</h6>
                            <p>{planet.travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;