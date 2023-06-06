import Foot from "./Foot";

const Card = ({ post }) => {
    return (
        <div className="card">
            <div className="nav-owner">
                <img src={post.imgdp} alt="" className="imgdp" />
                <p className="title">{post.title}</p>
            </div>
            <img src={post.img} alt="" className="img" />
            <p className="head">{post.desc}</p>
            <p className="desc">{post.longDesc}</p>
            <Foot />
        </div>

        
    )
}

export default Card;