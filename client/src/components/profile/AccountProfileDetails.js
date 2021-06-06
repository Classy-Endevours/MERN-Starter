/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { getProfile, updateProfile } from '../../pages/auth/reducer';

const AccountProfileDetails = (props) => {
  const { auth, actions } = props;

  const onSubmit = (values) => {
    actions.updateProfile(values);
  };
  useEffect(() => {
    actions.getProfile();
  }, []);
  const formatInput = () => {
    const { emailId = '', name = '', phone = '', address = '' } = auth.data;
    return {
      emailId,
      name,
      phone,
      address,
    };
  };
  return (
    <Formik
      initialValues={formatInput()}
      enableReinitialize
      validationSchema={Yup.object().shape({
        emailId: Yup.string()
          .email('Must be a valid email')
          .max(255)
          .required('Email is required'),
        name: Yup.string().max(255).required('Name is required'),
        phone: Yup.string().max(255).required('Phone is required'),
        address: Yup.string().max(255).required('Address is required'),
      })}
      onSubmit={onSubmit}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
      }) => (
        <form autoComplete="off" onSubmit={handleSubmit} noValidate {...props}>
          <Card>
            <CardHeader
              subheader="The information can be edited"
              title="Profile"
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                    onBlur={handleBlur}
                    label="Name"
                    name="name"
                    onChange={handleChange}
                    required
                    value={values.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    error={Boolean(touched.address && errors.address)}
                    helperText={touched.address && errors.address}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.address}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    error={Boolean(touched.emailId && errors.emailId)}
                    helperText={touched.emailId && errors.emailId}
                    onBlur={handleBlur}
                    label="Email Address"
                    name="emailId"
                    onChange={handleChange}
                    required
                    type="email"
                    value={values.emailId}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    error={Boolean(touched.phone && errors.phone)}
                    helperText={touched.phone && errors.phone}
                    onBlur={handleBlur}
                    name="phone"
                    onChange={handleChange}
                    type="number"
                    value={values.phone}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2,
              }}
            >
              <Button color="primary" type="submit" variant="contained">
                Save details
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  auth: state.login,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getProfile: (payload) => dispatch(getProfile(payload)),
      updateProfile: (payload) => dispatch(updateProfile(payload)),
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountProfileDetails);
