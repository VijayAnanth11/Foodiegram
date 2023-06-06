import React, { Component } from 'react';
import '../components/addpost.css'
import PostService from '../services/PostService';
import Navbar from '../components/Navbar'

class AddPost extends Component {

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

    // cancel(){
    //     this.props.history.push('/create')
    // }


    render() {
        return (
            <div>
                <Navbar />
                <div className='friendlist'>
                    <form>
                        <p style={{fontSize:20, color:'rgb(3, 59, 119)', marginLeft:'10rem'}}>UPLOAD POST</p>
                        <div>
                            <input placeholder='Title' name='title' className='input'
                                value={this.state.title} onChange={this.changerTitleNameHandler} />
                        </div>
                        <div>
                            <input placeholder='What is your mind ? ' name='message' className='input'
                                value={this.state.message} onChange={this.changerMessageNameHandler} />
                        </div>

                        <div className='postbtn'>
                            <button onClick={this.save} className='button'>Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default AddPost;