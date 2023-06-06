import React, { Component } from 'react';
import '../components/addpost.css'
import Navbar from '../components/Navbar'

import FriendService from "../services/FriendService";

class AddF1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name:'Jack Charlie',      
        }
       
        this.changernameHandler = this.changernameHandler.bind(this);
        this.save = this.save.bind(this);
    }

    save = (e) => {
        e.preventDefault();
        let friend = { name: this.state.name};
        console.log('post =>' + JSON.stringify(friend));

        FriendService.createFriend(friend).then(res => {
            this.props.history.push('/')
        });

    }

    changernameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
 

    render() {
        return (
            <div>
                <Navbar />
                <div className="addpost">

            <p style={{fontSize:20, color:'rgb(3, 59, 119)', marginLeft:'10rem'}}>ADD</p>
                <form className='form'>

                    <div style={{ display: 'flex' }}>
                        <input placeholder='Jack Charlie' name='name' className='input' value={this.state.name} onChange={this.changernameHandler}
                        />
                    </div>
                   
                    <div className='postbtn'>
                        <button className='button' onClick={this.save} >ADD</button>
                    </div>

                </form>
            </div>
            </div>
        )
    }
}


export default AddF1;