import "../styles/crew.css";
import data from '../data.json';
import {useState} from 'react';


const Crew = () => {
    const [crew, setCrew] = useState(data.crew[0]);
    const [crewIndex, setCrewIndex] = useState(0);
    // const [intervalTime, setIntervalTime] = useState(true);
    const handleChangeCrew = (e) => {
        setCrew(data.crew[e.currentTarget.id]);
        setCrewIndex(e.currentTarget.id);
        document.querySelectorAll('.crew-tabs li').forEach((item) => {
            item.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    }
    // const changeCrew = () => {
    //     let id = (crewIndex + 1) % 4;
    //     setCrew(data.crew[id]);
    //     setCrewIndex(id);
    //     document.querySelectorAll('.crew-tabs li').forEach((item) => {
    //         item.classList.remove('active');
    //     });
    //     document.querySelectorAll('.crew-tabs li')[id].classList.add('active');
    // }
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         changeCrew();
    //         setIntervalTime(!intervalTime);
    //     }, 5000);
    // }, [intervalTime]);
    return (
        <div className="crew-main">
            <h1 className="crew-head-title"><span>02 </span>Meet your crew</h1>
            <div className="crew-details" key={crew.name}>
                <h2 className="crew-position">{crew.role}</h2>
                <h1 className="crew-name">{crew.name}</h1>
                <p className="crew-bio">{crew.bio}</p>
                <ul className="crew-tabs">
                    <li id="0" className="active" onClick={handleChangeCrew}></li>
                    <li id="1" onClick={handleChangeCrew}></li>
                    <li id="2" onClick={handleChangeCrew}></li>
                    <li id="3" onClick={handleChangeCrew}></li>
                </ul>
            </div>
            <picture className="crew-main-img" key={crewIndex}>
                <source className="crew-img" media="(max-width: 450px)" srcSet={crew.images.webp} />
                <img className="crew-img" src={crew.images.png} alt={crew.name}/>
            </picture>
        </div>
    );
}

export default Crew;