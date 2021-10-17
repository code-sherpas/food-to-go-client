import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { fDate } from '~/utils/formatTime';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Avatar, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  },
  messageItem: {
    display: 'flex',
    '&:not(:last-child)': {
      marginBottom: theme.spacing(1.5)
    }
  },
  messageBody: {
    flexGrow: 1,
    padding: theme.spacing(1.5),
    marginLeft: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.neutral
  }
}));

// ----------------------------------------------------------------------

Comments.propTypes = {
  post: PropTypes.object,
  className: PropTypes.string
};

function Comments({ post, className }) {
  const classes = useStyles();
  const { comments } = post;

  return (
    <div className={clsx(classes.root, className)}>
      {comments.map(comment => (
        <div key={comment.id} className={classes.messageItem}>
          <Avatar alt={comment.author.name} src={comment.author.avatarUrl} />
          <div className={classes.messageBody}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box component="h6" sx={{ typography: 'subtitle2', mb: 0.5 }}>
                {comment.author.name}
              </Box>
              <Box sx={{ typography: 'caption', color: 'text.disabled' }}>
                {fDate(comment.createdAt)}
              </Box>
            </Box>
            <Typography variant="body2" color="textSecondary">
              {comment.message}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
