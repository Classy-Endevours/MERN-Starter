/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Box, Container } from '@material-ui/core';
import UserListResults from '../../components/users/UserListResults';
// import users from '../../__mocks__/customers';
import { getList } from './reducer';

const CustomerList = ({ actions, list }) => {
  useEffect(() => {
    actions.getList();
  }, []);
  return (
    <>
      <Helmet>
        <title>Users | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ pt: 3 }}>
            <UserListResults users={list.list} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getList: () => dispatch(getList()),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
