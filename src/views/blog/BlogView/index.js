import { orderBy } from 'lodash';
import PostList from './PostList';
import SortPosts from './SortPosts';
import Page from '~/components/Page';
import SearchPost from './SearchPost';
import { Icon } from '@iconify/react';
import { PATH_APP } from '~/routes/paths';
import plusFill from '@iconify-icons/eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HeaderDashboard from '~/components/HeaderDashboard';
import roundPostAdd from '@iconify-icons/ic/round-post-add';
import InfinitScroll from 'react-infinite-scroll-component';
import React, { useEffect, useCallback, useState } from 'react';
import { getPostsInitial, getMorePosts } from '~/redux/slices/blog';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Button,
  Skeleton,
  Container,
  Hidden
} from '@material-ui/core';
import { MFab } from '~/@material-extend';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

const useStyles = makeStyles(theme => ({
  root: {},
  btnAddPost: {
    zIndex: 999,
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3)
  }
}));

// ----------------------------------------------------------------------

const applySort = (posts, sortBy) => {
  if (sortBy === 'latest') {
    posts = orderBy(posts, ['createdAt'], ['desc']);
  }
  if (sortBy === 'oldest') {
    posts = orderBy(posts, ['createdAt'], ['asc']);
  }
  if (sortBy === 'popular') {
    posts = orderBy(posts, ['view'], ['desc']);
  }
  return posts;
};

const SkeletonLoad = (
  <Box sx={{ mt: 2 }}>
    <Grid container spacing={3}>
      {[...Array(4)].map((item, index) => (
        <Grid item xs={12} md={3} key={index}>
          <Skeleton
            variant="rectangular"
            component={Box}
            sx={{ width: '100%', height: 200, borderRadius: 2 }}
          />
          <Box sx={{ display: 'flex', mt: 1.5 }}>
            <Skeleton
              variant="circular"
              component={Box}
              sx={{ width: 40, height: 40 }}
            />
            <Skeleton
              variant="text"
              component={Box}
              sx={{ mx: 1, flexGrow: 1 }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

function BlogView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState('latest');
  const { posts, hasMore, index, step } = useSelector(state => state.blog);

  const sortedPosts = applySort(posts, filters);
  const onScroll = useCallback(() => dispatch(getMorePosts()), [dispatch]);

  useEffect(() => {
    dispatch(getPostsInitial(index, step));
  }, [dispatch, index, step]);

  const handleChangeSort = event => {
    setFilters(event.target.value);
  };

  return (
    <Page title="Management | Blog" className={classes.root}>
      <Container>
        <HeaderDashboard
          heading="Blog"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Management', href: PATH_APP.management.root },
            { name: 'Blog' }
          ]}
          action={
            <Hidden smDown>
              <Button
                variant="contained"
                component={RouterLink}
                to={PATH_APP.management.blog.newPost}
                startIcon={<Icon icon={plusFill} />}
              >
                New Post
              </Button>
            </Hidden>
          }
        />

        <Hidden smUp>
          <Box className={classes.btnAddPost}>
            <MFab component={RouterLink} to={PATH_APP.management.blog.newPost}>
              <Icon icon={roundPostAdd} width={24} height={24} />
            </MFab>
          </Box>
        </Hidden>

        <Box
          sx={{
            mb: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <SearchPost />
          <SortPosts
            query={filters}
            options={SORT_OPTIONS}
            onSort={handleChangeSort}
          />
        </Box>

        <InfinitScroll
          next={onScroll}
          hasMore={hasMore}
          loader={SkeletonLoad}
          dataLength={posts.length}
          style={{ overflow: 'inherit' }}
        >
          <PostList posts={sortedPosts} />
        </InfinitScroll>
      </Container>
    </Page>
  );
}

export default BlogView;
