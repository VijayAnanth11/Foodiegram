import React, { Component } from 'react';

import '../components/setting.css'
import i1 from '../images/2.jpg';
import { MdWorkOutline } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import i2 from '../images/p1.jpg'
import i3 from '../images/p2.jpg'
import i4 from '../images/i3.webp'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'

import ProfileService from '../services/ProfileService';

class Setting extends Component {


    constructor(props) {
        super(props)

        this.state = {
            profiles: []
        }

    }

    componentDidMount() {
        ProfileService.getProfiles().then((res) => {
            this.setState({ profiles: res.data });
        });
    }


    render() {
        return (
            <div>
                <Navbar />
                <div className="settinglist">

                    <p style={{ fontSize: 20, color: 'rgb(3, 59, 119)', marginLeft: '10rem' }}>PROFILE SETTING</p>

                    <div style={{ display: 'flex' }}>
                        <div>
                            <img src={i1} alt="" className="setimg" />
                            <p className="name1">Zumair Sino</p>
                        </div>
                        <div style={{ marginTop: '2rem', marginLeft: '10rem' }}>
                            <div>
                                <Link to='/addprofile'>
                                    <button style={{ backgroundColor: 'rgb(2, 52, 40)', padding: 1, width: 100, height: 30, marginTop: 5, borderRadius: 8, cursor: 'pointer', color: 'white' }}>Add Details</button>
                                </Link>
                            </div>
                            <div>
                                <Link to='/edit'>
                                    <button style={{ backgroundColor: 'rgb(3, 59, 119)', padding: 1, width: 100, height: 30, marginTop: 5, borderRadius: 8, cursor: 'pointer', color: 'white' }}>Edit Details</button>
                                </Link>
                            </div>
                            <div>
                                <Link to='/deleteprofile'>
                                    <button style={{ backgroundColor: 'rgb(97, 3, 26)', padding: 1, width: 100, height: 30, marginTop: 5, borderRadius: 8, cursor: 'pointer', color: 'white' }}>Delete</button>
                                </Link>
                            </div>

                        </div>
                    </div>


                    <div className='box'>
                        {
                            this.state.profiles.map(
                                profile =>
                                    <div key={profile.id}>

                                        <div className='item1'>
                                            <MdWorkOutline className='icon1' />
                                            <p className='icontxt'>Work at</p>
                                            <p style={{ marginLeft: '0.5rem', fontSize: 18, fontWeight: 'bold' }}>{profile.work}</p>
                                        </div>
                                        <div className='item1'>
                                            <GoLocation className='icon1' />
                                            <p className='icontxt'>From Kandy</p>
                                            <p style={{ marginLeft: '0.5rem', fontSize: 18, fontWeight: 'bold' }}>{profile.town}</p>

                                        </div>
                                        <div className='item1'>
                                            <FaHome className='icon1' />
                                            <p className='icontxt'>Lives in Colombo</p>
                                            <p style={{ marginLeft: '0.5rem', fontSize: 18, fontWeight: 'bold' }}>{profile.live}</p>
                                        </div>
                                        <div className='item1'>
                                            <AiFillHeart className='icon1' />
                                            <p className='icontxt'>Single </p>
                                            <p style={{ marginLeft: '0.5rem', fontSize: 18, fontWeight: 'bold' }}>{profile.status}</p>
                                        </div>
                                    </div>
                            )
                        }
                    </div>

                    <div className='gallery'>
                        <img src={i3} alt="" className="gall1" />
                        <img src={i4} alt="" className="gall1" />
                        <img src={i2} alt="" className="gall1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Setting;