import React from 'react';
import './Post.css';
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({displayName, username, verified, text, image, avatar}) => {
    return (
        <div className="post">
            <div className="post-avatar">
                <Avatar src={Avatar} />
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-headerText">
                        <h3>
                            Rafeh Quazi{""}
                            <span className="headerSpecial">
                                <VerifiedUserIcon className="post-badge" />
                                @username
                            </span>
                        </h3>
                    </div>
                    <div className="post-headerDescription">
                        <p>Lorem ipsum dolor sit, amet consectetur </p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/l3q30ZdjOe0k8ERH2/giphy.gif" alt=""/>
                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
};

export default Post;