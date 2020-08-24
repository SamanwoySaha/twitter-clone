import React from 'react';
import './Feed.css';
import Tweet from '../Tweet/Tweet';
import Post from '../Post/Post';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed-header">
                <h1>Home</h1>
            </div>

            <Tweet />

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            {/* posts */}
            {/* posts */}
            {/* posts */}
            {/* posts */}
            {/* posts */}
            {/* posts */}
        </div>
    );
};

export default Feed;