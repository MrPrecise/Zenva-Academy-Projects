import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Tweet() {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <NameWithHandle/><Time/>
                <Message/>
                <div className="button">
                    <CommentButton/>
                    <RetweetButton/>
                    <LikeButton/>
                    <ShareButton/>
                </div>
            </div>
        </div>
    );
}


function Avatar() {
    return (
        <img src="https://www.gravatar.com/avatar/nothing"
        className="avatar"
        alt="avatar"/>
    );
}

function Message() {
    return (
        <div className="message">
            This is less than 140 characters.
        </div>
    );
}

function NameWithHandle() {
    return (
        <span className="name-with-handle">
            <span className="name">Morgan</span>
            <span className="handle">@zenvaMorgan</span>
        </span>
    );
}

const Time = () => (
    <span className="time">3h ago</span>
);

const LikeButton = () =>(
    <i className="fa fa-heart like-button"/>
);

const CommentButton = () => (
    <i className="far fa-comment"/>
);

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
);

const ShareButton = () => (
    <i className="fas fa-external-link-alt"/>
);


ReactDom.render(<Tweet/>,document.querySelector('#root'));