import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const Likes = ({ post, user }) => {


    if (post.likes.length > 0) {
       
        return post.likes.find((like) => like === (user?.result?.sub || user?.result?._id))
            ? (
                <><ThumbUpAltIcon fontSize='small' />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
            ) : (
                <><ThumbUpAltIcon fontSize='small' />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            )
    }
    return <><ThumbUpAltOutlinedIcon fontSize='small' />&nbsp;Like</>
}

export default Likes;