import "../styles/technology.css";
import data from '../data.json';
import {useState} from 'react';


const Technology = () => {
    const [tech, setTech] = useState(data.technology[0]);
    const changeTech = (e) => {
        const index = e.target.innerHTML - 1;
        setTech(data.technology[index]);
        const tabs = document.querySelectorAll('.tech-tabs li');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        e.target.classList.add('active');
    }
    return (
        <div className="tech-main">
            <h1 className="tech-head-title"><span>03 </span>SPACE LAUNCH 101</h1>
            <div className="tech-container">
                <ul className="tech-tabs">
                    <li onClick={changeTech} className="active">1</li>
                    <li onClick={changeTech}>2</li>
                    <li onClick={changeTech}>3</li>
                </ul>
                <div className="tech-info">
                    <p class>THE TERMINOLOGY…</p>
                    <h1>{tech.name}</h1>
                    <p className="description">{tech.description}</p>
                </div>
                <picture className="tech-img">
                    <source media="(min-width: 770px)" srcSet={process.env.PUBLIC_URL+tech.images.portrait} />
                    <img src={process.env.PUBLIC_URL+tech.images.landscape} alt="rocket" />
                </picture>
            </div>
        </div>
    );
}

export default Technology;