/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import FacebookIcon from '../../icon/Facebook';
import GoogleIcon from '../../icon/Google';
import { ColumnContainer } from '../../common/uielements/collection.style';
import { register } from './reducer';
import { LOGIN_ROUTE, USERS_ROUTE } from '../../constant/routes';

const Login = ({ auth, actions }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isSuccess) {
      navigate(USERS_ROUTE, { replace: true });
    }
  }, [auth]);

  const onSubmit = (values, { setSubmitting }) => {
    const payload = { ...values };
    payload.role = 'owner';
    actions.register(payload);
    setSubmitting(false);
  };
  return (
    <>
      <Helmet>
        <title>Register | Starter</title>
      </Helmet>
      <ColumnContainer
        style={{
          alignItems: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              name: '',
              phone: '',
              address: '',
              emailId: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              emailId: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required'),
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
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Sign up
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign up on the internal platform
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Button
                      color="primary"
                      fullWidth
                      startIcon={<FacebookIcon />}
                      onClick={handleSubmit}
                      size="medium"
                      variant="contained"
                    >
                      Continue with Facebook
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={handleSubmit}
                      size="medium"
                      variant="contained"
                    >
                      Continue with Google
                    </Button>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3,
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.emailId && errors.emailId)}
                  fullWidth
                  helperText={touched.emailId && errors.emailId}
                  label="Email Address"
                  margin="normal"
                  name="emailId"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.emailId}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label="Name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.name}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.phone && errors.phone)}
                  fullWidth
                  helperText={touched.phone && errors.phone}
                  label="Phone"
                  margin="normal"
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.phone}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.address && errors.address)}
                  fullWidth
                  helperText={touched.address && errors.address}
                  label="Address"
                  margin="normal"
                  name="address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.address}
                  variant="outlined"
                />

                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="medium"
                    type="submit"
                    variant="contained"
                  >
                    {auth.isLoading ? (
                      <CircularProgress size={20} color="secondary" />
                    ) : (
                      'Sign up now'
                    )}
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  have an account?{' '}
                  <Link component={RouterLink} to={LOGIN_ROUTE} variant="h6">
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </ColumnContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.login,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      register: (payload) => dispatch(register(payload)),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
