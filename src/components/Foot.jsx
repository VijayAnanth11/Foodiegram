import { SlLike } from "react-icons/sl"
import { AiOutlineComment } from "react-icons/ai"
import { TbShare3 } from "react-icons/tb";

import { Link } from 'react-router-dom';

import './icons.css'
const Foot = () => {

    return (
        <div className="foot">
            <SlLike className="like" />
            <Link to='/comment'>
                <AiOutlineComment className="comment" />
            </Link>
            <TbShare3 className="comment" />
        </div>
    );
};

export default Foot