import { Link } from 'react-router-dom';
import './icons.css'

const LoginNav = () => {

    return (
        <div className="navbar">
            <span className="logo">
                <Link className='navtitle'>FOODIEGRAM</Link>
            </span>
            <ul className="list">
                <span>
                    <Link to='/' className='navtitle'>Login</Link>
                </span>
            </ul>
        </div>
    );
};

export default LoginNav;