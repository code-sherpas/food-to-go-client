import Hero from './Hero';
import Tags from './Tags';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Page from '~/components/Page';
import CommentForm from './CommentForm';
import { useSnackbar } from 'notistack';
import CommentList from './CommentList';
import RecentPosts from './RecentPosts';
import React, { useEffect } from 'react';
import { PATH_APP } from '~/routes/paths';
import { sentenceCase } from 'change-case';
import fakeRequest from '~/utils/fakeRequest';
import { useParams } from 'react-router-dom';
import Markdown from '~/components/Markdown';
import { useDispatch, useSelector } from 'react-redux';
import HeaderDashboard from '~/components/HeaderDashboard';
import { getPost, getRecentPosts } from '~/redux/slices/blog';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Card,
  Divider,
  Skeleton,
  Container,
  Typography,
  Pagination
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 10, 10)
    }
  }
}));

// ----------------------------------------------------------------------

const SkeletonLoad = (
  <>
    <Skeleton
      component={Box}
      width="100%"
      height={560}
      variant="rectangular"
      sx={{ borderRadius: 2 }}
    />
    <Box sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
      <Skeleton variant="circular" width={64} height={64} />
      <Box sx={{ flexGrow: 1, ml: 2 }}>
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
      </Box>
    </Box>
  </>
);

function PostDetailsView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { title } = useParams();
  const { post, error, recentPosts } = useSelector(state => state.blog);

  useEffect(() => {
    dispatch(getPost(title));
    dispatch(getRecentPosts(title));
  }, [dispatch, title]);

  const CommentSchema = Yup.object().shape({
    comment: Yup.string().required('Comment is required'),
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required')
  });

  const formik = useFormik({
    initialValues: {
      comment: '',
      name: '',
      email: ''
    },
    validationSchema: CommentSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        await fakeRequest(500);
        resetForm();
        setSubmitting(false);
        enqueueSnackbar('Post success', { variant: 'success' });
      } catch (error) {
        console.log(error);
        setSubmitting(false);
        setErrors({ afterSubmit: error.code });
      }
    }
  });

  return (
    <Page title="Management | Post Details" className={classes.root}>
      <Container>
        <HeaderDashboard
          heading="Post Details"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Management', href: PATH_APP.management.root },
            { name: 'Blog', href: PATH_APP.management.blog.root },
            { name: sentenceCase(title) }
          ]}
        />

        {post && (
          <Card>
            <Hero post={post} />

            <div className={classes.content}>
              <Box component="h6" sx={{ typography: 'h6', mb: 5 }}>
                {post.description}
              </Box>

              <Markdown source={post.body} />

              <Box sx={{ my: 5 }}>
                <Divider />
                <Tags post={post} />
                <Divider />
              </Box>

              <Box sx={{ display: 'flex', mb: 2 }}>
                <Typography variant="h4">Comments</Typography>
                <Box sx={{ color: 'text.disabled', typography: 'subtitle2' }}>
                  ({post.comments.length})
                </Box>
              </Box>

              <CommentList post={post} />

              <Box
                sx={{
                  mb: 5,
                  mt: 3,
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
              >
                <Pagination count={8} color="primary" />
              </Box>

              <CommentForm formik={formik} />
            </div>
          </Card>
        )}

        {!post && SkeletonLoad}

        {error && <Typography variant="h6">404 Post not found</Typography>}

        {recentPosts.length > 0 && <RecentPosts posts={recentPosts} />}
      </Container>
    </Page>
  );
}

export default PostDetailsView;
