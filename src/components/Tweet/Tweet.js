import React from 'react';
import './Tweet.css';
import { Avatar, Button } from '@material-ui/core';

const Tweet = () => {
    return (
        <div className="tweet">
            <form>
                <div className="tweet-input">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <input type="text" className="text" placeholder="What's happening"/>
                </div>
                {/* <input type="text" className="tweet-imageInput" placeholder="Enter Image URL"/> */}
                <Button className="tweet-btn">Tweet</Button>
            </form>    
        </div>
    );
};

export default Tweet;