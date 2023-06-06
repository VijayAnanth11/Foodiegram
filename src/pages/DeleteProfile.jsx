import React, { Component } from 'react';
import '../components/addpost.css'
import ProfileService from '../services/ProfileService';
import Navbar from '../components/Navbar'

class DeleteProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            profile: ''
        }

        this.state = {
            profiles: []
        }

        this.deleteProfile = this.deleteProfile.bind(this);

    }

    componentDidMount() {
        ProfileService.getProfiles().then((res) => {
            this.setState({ profiles: res.data });
        });
    }

    deleteProfile(id) {
        ProfileService.deleteProfile(id).then(res => {
            this.setState({ profiles: this.state.profiles.filter(profile => profile.id !== id) });
        });
    }


    render() {
        return (
            <div>
                <Navbar />
                <div className="addpost">

                    <p style={{ fontSize: 20, color: 'rgb(3, 59, 119)', marginLeft: '10rem' }}>DELETE PROFILE</p>
                    <div>
                        {
                            this.state.profiles.map(
                                profile =>
                                    <div key={profile.id} style={{ display: 'flex', backgroundColor: 'rgb(227, 223, 224)', marginTop: '1rem', paddingBottom: '0.5rem' }}>

                                        <div style={{ backgroundColor: 'rgb(227, 223, 224)', marginTop: '1rem', padding: '0.5rem' }}>
                                            <div style={{ display: 'flex' }}>
                                                <p style={{ marginLeft: '1rem', fontSize: '18px' }}>Work</p>
                                                <p style={{ fontWeight: 'bold', marginLeft: '1rem', fontSize: '18px' }}>{profile.work}</p>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <p style={{ marginLeft: '1rem', fontSize: '18px' }}>From</p>
                                                <p style={{ fontWeight: 'bold', marginLeft: '1rem', fontSize: '18px' }}>{profile.town}</p>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <p style={{ marginLeft: '1rem', fontSize: '18px' }}>Live</p>
                                                <p style={{ fontWeight: 'bold', marginLeft: '1rem', fontSize: '18px' }}>{profile.live}</p>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <p style={{ marginLeft: '1rem', fontSize: '18px' }}>Status</p>
                                                <p style={{ fontWeight: 'bold', marginLeft: '1rem', fontSize: '18px' }}>{profile.status}</p>
                                            </div>

                                        </div>
                                        <div style={{ marginTop: 12, marginLeft: '13rem' }}>
                                            <button style={{ backgroundColor: 'rgb(97, 3, 26)', padding: 1, width: 60, height: 30, marginTop: 5, borderRadius: 8, cursor: 'pointer', color: 'white' }} onClick={() => this.deleteProfile(profile.id)}>Delete
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


export default DeleteProfile;