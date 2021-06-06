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
import { login } from './reducer';
import { USERS_ROUTE } from '../../constant/routes';

const Login = ({ auth, actions }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isSuccess) {
      navigate(USERS_ROUTE, { replace: true });
    }
  }, [auth]);

  const onSubmit = (values, { setSubmitting }) => {
    actions.login(values);
    setSubmitting(false);
  };
  return (
    <>
      <Helmet>
        <title>Login | Starter</title>
      </Helmet>
      <ColumnContainer
        style={{
          alignItems: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              emailId: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              emailId: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required'),
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
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
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
                      Login with Facebook
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
                      Login with Google
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
                      'Sign in now'
                    )}
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Don&apos;t have an account?{' '}
                  <Link component={RouterLink} to="/register" variant="h6">
                    Sign up
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
      login: (payload) => dispatch(login(payload)),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
