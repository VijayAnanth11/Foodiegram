import { Link } from 'react-router-dom';
import { AiOutlineUserAdd } from "react-icons/ai"
import { AiOutlineSetting } from "react-icons/ai"
import { MdOutlineNotificationsActive } from "react-icons/md"
import { AiOutlineLogout } from "react-icons/ai"
import { AiFillHome } from "react-icons/ai"
import { BiAddToQueue } from "react-icons/bi"

import './icons.css'

const Navbar = () => {

    return (
        <div className="navbar">
            <span className="logo">
                <Link className='navtitle'>FOODIEGRAM</Link>
            </span>
            <ul className="list">
                <span>
                    <Link to='/home'>
                        <AiFillHome className="addfriend" />
                    </Link>
                    <Link to='/addpost'>
                        <BiAddToQueue className="friend" />
                    </Link>
                    <Link to='/addfriend'>
                        <AiOutlineUserAdd className="friend" />
                    </Link>
                    <Link to='/notification'>
                        <MdOutlineNotificationsActive className="friend" />
                    </Link>
                    <Link to='/setting'>
                        <AiOutlineSetting className="friend" />
                    </Link>
                    <Link to='/'>
                        <AiOutlineLogout className="logout" />
                    </Link>
                </span>
            </ul>
        </div>
    );
};

export default Navbar;