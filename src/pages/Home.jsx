import React, { Component } from 'react';
import PostService from '../services/PostService';
import Card from "../components/Card";
import { posts } from "../homedata";
import Foot from '../components/Foot';
import dp from "../../src/images/2.jpg";
import Navbar from '../components/Navbar'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }

        this.deletePost= this.deletePost.bind(this);
    }

    componentDidMount() {
        PostService.getPosts().then((res) => {
            this.setState({ posts: res.data });
        });
    }

    deletePost(id){
        PostService.deletePost(id).then( res => {
            this.setState({posts: this.state.posts.filter(post => post.id !== id)});
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="home">
                    {posts.map(post => (
                        <Card key={post.id} post={post} />
                    ))}

                    <div className="addcard">
                        <div>
                            {
                                this.state.posts.map(
                                    post =>
                                        <div key={post.id} style={{ display: 'flex' }}>

                                            <div>
                                                <div className="nav-new">
                                                    <img src={dp} alt="" className="imgdp" />
                                                    <p className="title">Zumair Sino</p>
                                                </div>
                                                <p>{post.title}</p>
                                                <p>{post.message}</p>
                                                <Foot />
                                            </div>
                                            <div style={{marginTop:12}}>
                                                <div style={{backgroundColor: 'rgb(3, 59, 119)', padding:1, width:60, height:30, borderRadius:8, cursor:'pointer' }}>
                                                    <p style={{margin:3, marginLeft:15, color:'white'}}>Edit</p>
                                                </div>
                                                <button style={{backgroundColor:'rgb(97, 3, 26)', padding:1, width:60, height:30, marginTop:5, borderRadius:8, cursor:'pointer',color:'white'}} onClick={ () => this.deletePost(post.id)}>
                                                    Delete
                                                </button>
                                            </div>

                                        </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;
