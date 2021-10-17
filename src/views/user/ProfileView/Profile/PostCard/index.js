import clsx from 'clsx';
import Comments from './Comments';
import PropTypes from 'prop-types';
import ActionBar from './ActionBar';
import { Icon } from '@iconify/react';
import CommentInput from './CommentInput';
import { fDate } from '~/utils/formatTime';
import MyAvatar from '~/components/MyAvatar';
import React, { useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import moreVerticalFill from '@iconify-icons/eva/more-vertical-fill';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Link,
  Card,
  CardMedia,
  Typography,
  CardHeader,
  IconButton,
  CardContent
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3)
  },
  cardMedia: {
    top: 0,
    height: '100%',
    position: 'absolute',
    borderRadius: theme.shape.borderRadius
  }
}));

// ----------------------------------------------------------------------

PostCard.propTypes = {
  post: PropTypes.object,
  authUser: PropTypes.object,
  className: PropTypes.string
};

function PostCard({ post, authUser, className }) {
  const classes = useStyles();
  const commentInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isLiked, setLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.personLikes.length);
  const [message, setMessage] = useState('');
  const hasComments = post.comments.length > 0;

  const handleLike = () => {
    setLiked(true);
    setLikes(prevLikes => prevLikes + 1);
  };

  const handleUnlike = () => {
    setLiked(false);
    setLikes(prevLikes => prevLikes - 1);
  };

  const handleChangeMessage = e => {
    setMessage(e.target.value);
  };

  const handleClickAttach = () => {
    fileInputRef.current.click();
  };

  const handleClickComment = () => {
    commentInputRef.current.focus();
  };

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader
        disableTypography
        avatar={<MyAvatar />}
        title={
          <Link
            to="#"
            variant="subtitle2"
            color="textPrimary"
            component={RouterLink}
          >
            {authUser.displayName}
          </Link>
        }
        subheader={
          <Box
            component="span"
            sx={{
              display: 'block',
              typography: 'caption',
              color: 'text.secondary'
            }}
          >
            {fDate(post.createdAt)}
          </Box>
        }
        action={
          <IconButton>
            <Icon icon={moreVerticalFill} width={20} height={20} />
          </IconButton>
        }
      />

      <CardContent>
        <Typography variant="body1">{post.message}</Typography>
        <Box
          sx={{
            mt: 3,
            position: 'relative',
            pt: 'calc(100% / 16 * 9)'
          }}
        >
          <CardMedia
            component="img"
            title="post media"
            data-sizes="auto"
            src="/static/images/placeholder.svg"
            data-src={post.media.small}
            data-srcset={`${post.media.small} 600w, ${post.media.medium} 960w`}
            className={clsx(classes.cardMedia, 'lazyload blur-up')}
          />
        </Box>

        <ActionBar
          post={post}
          likes={likes}
          isLiked={isLiked}
          onClickLike={handleLike}
          onClickUnlike={handleUnlike}
          onClickComment={handleClickComment}
        />

        {hasComments && <Comments post={post} />}

        <CommentInput
          message={message}
          onSetMessage={setMessage}
          fileInputRef={fileInputRef}
          commentInputRef={commentInputRef}
          onClickAttach={handleClickAttach}
          onChangeMessage={handleChangeMessage}
        />
      </CardContent>
    </Card>
  );
}

export default PostCard;
