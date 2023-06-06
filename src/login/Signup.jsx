import React, { Component } from 'react';
import '../components/addpost.css'
import PostService from '../services/PostService';
import LoginNav from '../components/LoginNav';

class Signup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            message: ''
        }
        this.changerTitleNameHandler = this.changerTitleNameHandler.bind(this);
        this.changerMessageNameHandler = this.changerMessageNameHandler.bind(this);
        this.save = this.save.bind(this);
    }

    save = (e) => {
        e.preventDefault();
        let post = { title: this.state.title, message: this.state.message };
        console.log('post =>' + JSON.stringify(post));

        PostService.createPost(post).then(res => {
            this.props.history.push('/')
        });

    }

    changerTitleNameHandler = (event) => {
        this.setState({ title: event.target.value });
    }
    changerMessageNameHandler = (event) => {
        this.setState({ message: event.target.value });
    }


    render() {
        return (
            <div>
                <LoginNav />
                <div className='friendlist'>
                    <form>
                        <p style={{fontSize:20, color:'rgb(3, 59, 119)', marginLeft:'10rem'}}>ACCOUNT SIGNUP</p>
                        <div>
                            <input placeholder='Name' name='title' className='input'
                                value={this.state.title} onChange={this.changerTitleNameHandler} />
                        </div>
                        <div>
                            <input placeholder='Email' name='message' className='input'
                                value={this.state.message} onChange={this.changerMessageNameHandler} />
                        </div>
                        <div>
                            <input placeholder='Mobile ' name='message' className='input'
                                value={this.state.message} onChange={this.changerMessageNameHandler} />
                        </div>
                        <div>
                            <input placeholder='Username' name='message' className='input'
                                value={this.state.message} onChange={this.changerMessageNameHandler} />
                        </div>
                        <div>
                            <input placeholder='Password ' name='message' className='input'
                                value={this.state.message} onChange={this.changerMessageNameHandler} />
                        </div>
                        <div>
                            <input placeholder='Confirm Password' name='message' className='input'
                                value={this.state.message} onChange={this.changerMessageNameHandler} />
                        </div>

                        <div className='postbtn'>
                            <button className='button'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default Signup;