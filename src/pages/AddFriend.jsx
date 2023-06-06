import React, { Component } from 'react';

import '../components/icons.css'
import Navbar from '../components/Navbar'
import dp from "../../src/images/s2.jpg"
import dp1 from "../../src/images/i4.jpg"
import dp2 from "../../src/images/i3.webp"
import dp3 from "../../src/images/1.jpg"

import FriendService from "../services/FriendService";
import { Link } from 'react-router-dom';

class AddFriend extends Component {

    constructor(props) {
        super(props)

        this.state = {
            friend: ''
        }

        this.state = {
            friends: []
        }

        this.deleteFriend = this.deleteFriend.bind(this);

    }

    componentDidMount() {
        FriendService.getFriends().then((res) => {
            this.setState({ friends: res.data });
        });
    }

    deleteFriend(id) {
        FriendService.deleteFriend(id).then(res => {
            this.setState({ friends: this.state.friends.filter(friend => friend.id !== id) });
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="friendlist">
                    <p style={{ fontSize: 20, color: 'rgb(3, 59, 119)', marginLeft: '10rem' }}>ADD FRIEND</p>

                    <div>
                        <div style={{ width: '900px', display: 'flex', marginLeft: '0.8rem' }}>
                            <img src={dp3} alt="" className="imgdp" />
                            <p style={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '0.4rem', width: '240px' }}>Jack Charlie</p>
                            <Link to='/addf1'>
                                <button className='followbutton' style={{ width: '120px', color: 'white', fontSize: '15px' }}>
                                    Add friend
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div style={{ width: '900px', display: 'flex', marginLeft: '0.8rem' }}>
                            <img src={dp1} alt="" className="imgdp" />
                            <p style={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '0.4rem', width: '240px' }}>Jhon Sefa</p>
                            <Link to='/addf2'>
                                <button className='followbutton' style={{ width: '120px', color: 'white', fontSize: '15px' }}>
                                    Add friend
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div style={{ width: '900px', display: 'flex', marginLeft: '0.8rem' }}>
                            <img src={dp2} alt="" className="imgdp" />
                            <p style={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '0.4rem', width: '240px' }}>Theo Alif</p>
                            <Link to='/addf3'>
                                <button className='followbutton' style={{ width: '120px', color: 'white', fontSize: '15px' }}>
                                    Add friend
                                </button>
                            </Link>
                        </div>
                    </div>


                    <p style={{ fontSize: 20, color: 'rgb(3, 59, 119)', marginLeft: '1rem', marginTop: '3rem' }}>ALL FRIENDS</p>
                    <div>
                        {
                            this.state.friends.map(
                                friend =>
                                    <div key={friend.id} style={{ display: 'flex', backgroundColor: 'white', paddingBottom: '0.5rem' }}>

                                        <div>
                                            <div style={{ width: '200px', display: 'flex' }}>
                                                <img src={dp} alt="" className="imgdp" />
                                                <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{friend.name}</p>
                                            </div>

                                        </div>
                                        <div style={{ marginTop: 12, marginLeft: '2rem' }}>
                                            <button style={{ backgroundColor: 'rgb(97, 3, 26)', padding: 1.5, width: 65, height: 35, marginTop: 5, borderRadius: 8, cursor: 'pointer', color: 'white' }} onClick={() => this.deleteFriend(friend.id)}>Unfriend
                                            </button>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default AddFriend;