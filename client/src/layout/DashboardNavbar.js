/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';
import { logout } from '../pages/auth/reducer';
import { LOGIN_ROUTE } from '../constant/routes';

const DashboardNavbar = ({ onMobileNavOpen, actions, isLogout, ...rest }) => {
  const [notifications] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    if (isLogout) {
      window.location.replace(LOGIN_ROUTE);
      // navigate('/', { replace: true });
    }
  }, [isLogout]);

  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box style={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <Badge
            badgeContent={notifications.length}
            color="primary"
            variant="dot"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton onClick={() => actions.logout()} color="inherit">
          <InputIcon />
        </IconButton>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  // eslint-disable-next-line react/require-default-props
  onMobileNavOpen: PropTypes.func,
  actions: PropTypes.object,
  isLogout: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isLogout: state.login.isLogout,
});
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      logout: () => dispatch(logout()),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardNavbar);
