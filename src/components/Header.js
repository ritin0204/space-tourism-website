import logo from './../shared/logo.svg';
import { Link } from 'react-router-dom';


const Navlink = (props) => {
    const handleClick = (e) => {
        const navLinks = document.querySelectorAll('.nav li');
        navLinks.forEach((link) => {
            link.classList.remove('active');
        })
        e.currentTarget.classList.add('active');
        document.querySelector('.nav').classList.toggle('nav-open');
        document.querySelector('.ham').classList.toggle('open');
    }
    if (props.id === '00') {
        return (
            <li id={props.id} className='active' onClick={handleClick}>
                <Link to={props.path} className="a-tag">
                    <span>{props.id} </span>
                    {props.name}
                </Link>
            </li>
        );
    }
    return (
        <li id={props.id} onClick={handleClick}>
            <Link to={props.path} className="a-tag">
                <span>{props.id} </span>
                {props.name}
            </Link>
        </li>
    );
}

const Header = () => {
    const navLinks = [{id: '00', name: 'Home', path: '/'}, {id: '01', name: 'Destination', path: '/destination'}, {id: '02', name: 'Crew', path: '/crew'}, {id: '03', name: 'Technology', path: '/technology'}]
    const navLinksList = navLinks.map((link) => {
        return (
            <Navlink key={link.id} id={link.id} name={link.name} path={link.path} isActive={link.isActive} />
        )
    })
    const openNav = () => {
        const nav = document.querySelector('.nav');
        const ham = document.querySelector('.ham');
        ham.classList.toggle('open');
        nav.classList.toggle('nav-open');
    }
    return (
        <header>
            <img className='logo svg-img' src={logo} alt="Logo" />
            <div className='hr-div'><hr /></div>
            <ul className='nav'>
                {navLinksList}
            </ul>
            <div className='ham' onClick={openNav}></div>
        </header>
    )
}

export default Header