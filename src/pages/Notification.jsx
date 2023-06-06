import React, { Component } from 'react';
import NotificationList from "../components/NotificationList";
import { notifications } from "../notificationdata";
import '../components/icons.css'
import CommentService from '../services/CommentService';
import dp from "../../src/images/s2.jpg"
import Navbar from '../components/Navbar'

class Notification extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        CommentService.getComments().then((res) => {
            this.setState({ comments: res.data });
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="friendlist">

                    <p style={{ fontSize: 20, color: 'rgb(3, 59, 119)', marginLeft: '10rem' }}>NOTIFICATION</p>
                    {notifications.map(notification => (
                        <NotificationList key={notification.id} notification={notification} />
                    ))}

                    <div>
                        {
                            this.state.comments.map(
                                comment =>
                                    <div key={comment.id} style={{ display: 'flex', backgroundColor: 'rgb(227, 223, 224)', marginTop: '1rem', paddingBottom: '0.5rem' }}>

                                        <div>
                                            <div className='fetchcomment'>
                                                <img src={dp} alt="" className="imgdp" />
                                                <p className="cmtxt">Diyo Dom</p>
                                                <p className="cmtxt2">Commented</p>
                                            </div>
                                            <p className='com'>{comment.comment}</p>
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

export default Notification;