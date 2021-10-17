import clsx from 'clsx';
import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import countries from './countries';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import useIsMountedRef from '~/hooks/useIsMountedRef';
import { Form, FormikProvider, useFormik } from 'formik';
import { UploadAvatar } from '~/components/Upload';
import { useFirebase, useFirestore } from 'react-redux-firebase';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  Switch,
  TextField,
  CardContent,
  FormControlLabel
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

General.propTypes = {
  className: PropTypes.string
};

function General({ className }) {
  const classes = useStyles();
  const firebase = useFirebase();
  const firestore = useFirestore();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const { auth, profile } = useSelector(state => state.firebase);

  const UpdateUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: auth.displayName || profile.displayName || '',
      email: auth.email,
      photoURL: auth.photoURL || profile.photoURL || '',
      phoneNumber: auth.phoneNumber || profile.phoneNumber || '',
      country: profile.country || '',
      address: profile.address || '',
      state: profile.state || '',
      city: profile.city || '',
      zipCode: profile.zipCode || '',
      about: profile.about || '',
      isPublic: false
    },
    validationSchema: UpdateUserSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await firebase.updateProfile({}).then(res => {
          firestore
            .collection('users')
            .doc(res.id)
            .set(
              {
                displayName: values.name,
                photoURL: values.photoURL,
                phoneNumber: values.phoneNumber,
                country: values.country,
                state: values.state,
                city: values.city,
                address: values.address,
                zipCode: values.zipCode,
                about: values.about,
                isPublic: values.isPublic
              },
              { merge: true }
            );
        });
        enqueueSnackbar('Update success', { variant: 'success' });
        if (isMountedRef.current) {
          setSubmitting(false);
        }
      } catch (err) {
        if (isMountedRef.current) {
          setErrors({ afterSubmit: err.code });
          setSubmitting(false);
        }
      }
    }
  });

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    setFieldValue
  } = formik;

  return (
    <div className={clsx(classes.root, className)}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <Box
                  sx={{
                    my: 10,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                  }}
                >
                  <UploadAvatar
                    disabled={auth.email === 'demo@minimals.cc'} // You can remove this
                    value={values.photoURL}
                    onChange={value => setFieldValue('photoURL', value)}
                  />
                  <FormControlLabel
                    control={
                      <Switch {...getFieldProps('isPublic')} color="primary" />
                    }
                    labelPlacement="start"
                    label="Public Profile"
                  />
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        disabled={auth.email === 'demo@minimals.cc'} // You can remove this
                        fullWidth
                        label="Name"
                        {...getFieldProps('name')}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        disabled
                        label="Email Address"
                        {...getFieldProps('email')}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        {...getFieldProps('phoneNumber')}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Address"
                        {...getFieldProps('address')}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        fullWidth
                        label="Country"
                        placeholder="Country"
                        {...getFieldProps('country')}
                        SelectProps={{ native: true }}
                        error={Boolean(touched.country && errors.country)}
                        helperText={touched.country && errors.country}
                        className={classes.margin}
                      >
                        <option value="" />
                        {countries.map(option => (
                          <option key={option.code} value={option.label}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="State/Region"
                        {...getFieldProps('state')}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="City"
                        {...getFieldProps('city')}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Zip/Code"
                        {...getFieldProps('zipCode')}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        {...getFieldProps('about')}
                        fullWidth
                        multiline
                        minRows={4}
                        maxRows={4}
                        label="About"
                      />
                    </Grid>
                  </Grid>

                  <Box
                    sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}
                  >
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      pending={isSubmitting}
                    >
                      Save Changes
                    </LoadingButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </div>
  );
}

export default General;
