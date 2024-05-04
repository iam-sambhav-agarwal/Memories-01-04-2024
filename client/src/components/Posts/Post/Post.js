import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import Likes from '../../Likes/Likes';
import { useNavigate } from 'react-router-dom'


const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('profile'))
    const openPost = () => navigate(`/posts/${post._id}`)
    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase component='span' className={classes.cardAction} onClick={openPost}>
                <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                <div className={classes.overlay}>
                    <Typography variant='h6'>{post.name}</Typography>
                    <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
                </div>
                {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
                    <div className={classes.overlay2} name="edit">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentId(post._id);
                      }}
                      style={{ color: 'white' }}
                      size="small"
                    >
                      <MoreHorizIcon fontSize="default" />
                    </Button>
                  </div>
                )}
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
                <CardContent>
                    <Typography variant='body2' color="textSecondary" component="p">{post.message}</Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                    <Likes post={post} user={user} />
                </Button>

                {(user?.result?.sub === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize='small' />
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Post