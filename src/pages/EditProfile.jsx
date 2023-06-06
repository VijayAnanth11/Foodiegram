import React, { Component } from 'react';
import '../components/addpost.css'
import PostService from '../services/PostService';
import Navbar from '../components/Navbar'

class EditProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            work: '',
            from: '',
            live: '',
            status: ''
        }
        this.changerWorkHandler = this.changerWorkHandler.bind(this);
        this.changerFromHandler = this.changerFromHandler.bind(this);
        this.changerLiveHandler = this.changerLiveHandler.bind(this);
        this.changerStatusHandler = this.changerStatusHandler.bind(this);
        this.save = this.save.bind(this);
    }

    save = (e) => {
        e.preventDefault();
        let post = { work: this.state.work, from: this.state.from, live: this.state.live, status: this.state.status};
        console.log('post =>' + JSON.stringify(post));

        PostService.createPost(post).then(res => {
            this.props.history.push('/')
        });

    }

    changerWorkHandler = (event) => {
        this.setState({ title: event.target.value });
    }
    changerFromHandler = (event) => {
        this.setState({ message: event.target.value });
    }
    changerLiveHandler = (event) => {
        this.setState({ message: event.target.value });
    }
    changerStatusHandler = (event) => {
        this.setState({ message: event.target.value });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="addpost">

            <p style={{fontSize:20, color:'rgb(3, 59, 119)', marginLeft:'10rem'}}>EDIT PROFILE</p>
                <form className='form'>

                    <div style={{ display: 'flex' }}>
                        <p htmlFor="image" className='posttxt'>Work</p>
                        <input placeholder='Work' name='work' className='input' value={this.state.work} onChange={this.changerWorkHandler}
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <p htmlFor="image" className='posttxt'>From</p>
                        <input placeholder='From' name='from' className='input' value={this.state.from} onChange={this.changerFromHandler}
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
                        <button className='button'>Save</button>
                    </div>

                </form>
            </div>
            </div>
        )
    }
}


export default EditProfile ;