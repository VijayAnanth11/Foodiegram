import React, { Component } from 'react';
import '../components/addpost.css'

import CommentService from '../services/CommentService';
import Navbar from '../components/Navbar';
import dp from "../../src/images/s2.jpg"

class AddComment extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comment: ''
        }

        this.state = {
            comments: []
        }

        this.changerCommentHandler = this.changerCommentHandler.bind(this);

        this.save = this.save.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    componentDidMount() {
        CommentService.getComments().then((res) => {
            this.setState({ comments: res.data });
        });
    }

    save = (e) => {
        e.preventDefault();
        let comment = { comment: this.state.comment };
        console.log('comment =>' + JSON.stringify(comment));

        CommentService.createComment(comment).then(res => {
            this.props.history.push('/')
        });

    }

    changerCommentHandler = (event) => {
        this.setState({ comment: event.target.value });
    }

    deleteComment(id) {
        CommentService.deleteComment(id).then(res => {
            this.setState({ comments: this.state.comments.filter(comment => comment.id !== id) });
        });
    }

    render() {
        return (

            <div>
                <Navbar />
                <div className='friendlist'>

                    <p style={{ fontSize: 20, color: 'rgb(3, 59, 119)', marginLeft: '10rem' }}>ADD COMMENT</p>
                    <form>
                        <div>
                            <input placeholder='Type Here' name='comment' className='input'
                                value={this.state.comment} onChange={this.changerCommentHandler} />
                        </div>

                        <div className='postbtn'>
                            <button onClick={this.save} className='button'>Upload</button>
                        </div>

                    </form>

                    <p style={{ fontSize: 20, color: 'rgb(3, 59, 119)', marginLeft: '1rem', marginTop: '5rem' }}>VIEW COMMENTS</p>
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
                                        <div style={{ marginTop: 12, marginLeft: '7rem' }}>
                                            <div style={{ backgroundColor: 'rgb(3, 59, 119)', padding: 1, width: 60, height: 30, borderRadius: 8, cursor: 'pointer' }}>
                                                <p style={{ margin: 3, marginLeft: 15, color: 'white' }}>Edit</p>
                                            </div>
                                            <button style={{ backgroundColor: 'rgb(97, 3, 26)', padding: 1, width: 60, height: 30, marginTop: 5, borderRadius: 8, cursor: 'pointer', color: 'white' }} onClick={() => this.deleteComment(comment.id)}>Delete
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


export default AddComment;