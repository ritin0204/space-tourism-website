import logo from './../shared/logo.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

const Navlink = (props) => {
    const [page, setPage] = useState(window.location.pathname.slice(1) ? window.location.pathname.slice(1) : "home");
    const device = useDevice();

    useEffect(() => {
        document.querySelector('body').style.backgroundImage = `url(${process.env.PUBLIC_URL}/assets/${page}/background-${page}-${device}.jpg)`;
    }, [page, device]);

    const handleClick = (e) => {
        const navLinks = document.querySelectorAll('.nav li');
        navLinks.forEach((link) => {
            link.classList.remove('active');
        })
        setPage(window.location.pathname.slice(1) ? window.location.pathname.slice(1) : "home");
        document.querySelector('body').style.backgroundImage = `url(${process.env.PUBLIC_URL}/assets/${page}/background-${page}-${device}.jpg)`;
        e.currentTarget.classList.add('active');
        e.currentTarget.children[0].click();
    }
    if (window.location.pathname === props.path) {
        return (
            <li className='active' onClick={handleClick} id={props.id}>
                <Link to={props.path} className="a-tag">
                    <span>{props.id} </span>
                    {props.name}
                </Link>
            </li>
        );
    }
    return (
        <li onClick={handleClick} id={props.id}>
            <Link to={props.path} className="a-tag">
                <span>{props.id} </span>
                {props.name}
            </Link>
        </li>
    );
}


const useDevice = () => {
    const [device, setDevice ] = useState('desktop');

    useEffect(() => {
        const handleWindowResize = () => {
            setDevice(window.innerWidth > 768 ? 'desktop' : window.innerWidth > 480 ? 'tablet' : 'mobile');
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);

    return device;
};

export default Header;
export { useDevice };