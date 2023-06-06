import React, { Component } from 'react';
import '../components/addpost.css'
import ProfileService from '../services/ProfileService';
import Navbar from '../components/Navbar'

class AddProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            work: '',
            town: '',
            live: '',
            status: ''
        }
        this.changerWorkHandler = this.changerWorkHandler.bind(this);
        this.changerFromHandler = this.changerFromHandler.bind(this);
        this.changerLiveHandler = this.changerLiveHandler.bind(this);
        this.changerStatusHandler = this.changerStatusHandler.bind(this);
        this.save = this.save.bind(this);

        this.changerTitleNameHandler = this.changerTitleNameHandler.bind(this);
    }

    save = (e) => {
        e.preventDefault();
        let profile = { work: this.state.work, town: this.state.town, live: this.state.live, status: this.state.status };
        console.log('profile =>' + JSON.stringify(profile));

        ProfileService.createProfile(profile).then(res => {
            this.props.history.push('/')
        });

    }


    changerTitleNameHandler = (event) => {
        this.setState({ title: event.target.value });
    }


    changerWorkHandler = (event) => {
        this.setState({ work: event.target.value });
    }
    changerFromHandler = (event) => {
        this.setState({ town: event.target.value });
    }
    changerLiveHandler = (event) => {
        this.setState({ live: event.target.value });
    }
    changerStatusHandler = (event) => {
        this.setState({ status: event.target.value });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="addpost">

                    <p style={{ fontSize: 20, color: 'rgb(3, 59, 119)', marginLeft: '10rem' }}>ADD PROFILE</p>
                    <form className='form'>


                        <div style={{ display: 'flex' }}>
                            <p htmlFor="image" className='posttxt'>Work</p>
                            <input placeholder='Work' name='work' className='input' value={this.state.work} onChange={this.changerWorkHandler}
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <p htmlFor="image" className='posttxt'>From</p>
                            <input placeholder='From' name='town' className='input' value={this.state.town} onChange={this.changerFromHandler}
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <p htmlFor="image" className='posttxt'>Live</p>
                            <input placeholder='Live' name='live' className='input' value={this.state.live} onChange={this.changerLiveHandler}
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <p htmlFor="image" className='posttxt'>Status</p>
                            <input placeholder='Status' name='status' className='input' value={this.state.status} onChange={this.changerStatusHandler}
                            />
                        </div>

                        <div className='postbtn'>
                            <button onClick={this.save} className='button'>Save</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}


export default AddProfile;