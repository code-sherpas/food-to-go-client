import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { paramCase } from 'change-case';
import { PATH_APP } from '~/routes/paths';
import { fDate } from '~/utils/formatTime';
import eyeFill from '@iconify-icons/eva/eye-fill';
import { Link as RouterLink } from 'react-router-dom';
import shareFill from '@iconify-icons/eva/share-fill';
import { fShortenNumber } from '~/utils/formatNumber';
import messageCircleFill from '@iconify-icons/eva/message-circle-fill';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Link,
  Card,
  Avatar,
  CardMedia,
  Typography,
  CardContent
} from '@material-ui/core';
import { MIcon } from '~/@material-extend';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10)
  },
  cardMediaWrap: {
    position: 'relative',
    paddingTop: 'calc(100% * 3 / 4)'
  },
  cardMedia: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%'
  },
  cardContent: {
    paddingTop: 36
  },
  cardTitle: {
    height: 44,
    overflow: 'hidden',
    WebkitLineClamp: 2,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical'
  },
  avatar: {
    zIndex: 9,
    width: 32,
    height: 32,
    bottom: -16,
    position: 'absolute',
    left: theme.spacing(3)
  },
  avatarShape: {
    zIndex: 9,
    bottom: -15,
    position: 'absolute'
  }
}));

// ----------------------------------------------------------------------

PostItem.propTypes = {
  post: PropTypes.object
};

function PostItem({ post }) {
  const classes = useStyles();
  const { cover, title, view, comment, share, author, createdAt } = post;
  const linkTo = PATH_APP.management.blog.root + '/post/' + paramCase(title);

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <div className={classes.cardMediaWrap}>
          <MIcon
            size={80}
            color="paper"
            src="/static/icons/shape-avatar.svg"
            className={classes.avatarShape}
          />
          <Avatar
            alt={author.name}
            src={author.avatarUrl}
            className={classes.avatar}
          />
          <CardMedia
            component="img"
            title="cover"
            src="/static/images/placeholder.svg"
            data-sizes="auto"
            data-src={cover.small}
            data-srcset={`${cover.small} 600w, ${cover.medium} 960w`}
            className={clsx(classes.cardMedia, 'lazyload blur-up')}
          />
        </div>

        <CardContent className={classes.cardContent}>
          <Box sx={{ typography: 'caption', color: 'text.disabled', mb: 1 }}>
            {fDate(createdAt)}
          </Box>

          <Link
            to={linkTo}
            color="inherit"
            variant="subtitle2"
            component={RouterLink}
            className={classes.cardTitle}
          >
            {title}
          </Link>

          <Box
            sx={{
              mt: 3,
              display: 'flex',
              flexWrap: 'wrap',
              color: 'text.disabled',
              justifyContent: 'flex-end'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component={Icon}
                icon={messageCircleFill}
                sx={{ width: 16, height: 16, mr: 0.5 }}
              />
              <Typography variant="caption">
                {fShortenNumber(comment)}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 1.5 }}>
              <Box
                component={Icon}
                icon={eyeFill}
                sx={{ width: 16, height: 16, mr: 0.5 }}
              />
              <Typography variant="caption">{fShortenNumber(view)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 1.5 }}>
              <Box
                component={Icon}
                icon={shareFill}
                sx={{ width: 16, height: 16, mr: 0.5 }}
              />
              <Typography variant="caption">{fShortenNumber(share)}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

RecentPosts.propTypes = {
  posts: PropTypes.array.isRequired,
  className: PropTypes.string
};

function RecentPosts({ posts, className }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Box component="h4" sx={{ typography: 'h4', mb: 5 }}>
        Recent posts
      </Box>

      <Grid container spacing={3}>
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </Grid>
    </div>
  );
}

export default RecentPosts;
