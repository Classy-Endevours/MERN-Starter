import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import DashboardNavbar from './DashboardNavbar';

const DashboardLayoutRoot = styled('div')({
  // backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
});

const DashboardLayoutWrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
  // [theme.breakpoints.up('lg')]: {
  //   paddingLeft: 256,
  // },
});

const DashboardLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
});

const DashboardLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
});

const DashboardLayout = () => {
  return (
    <DashboardLayoutRoot>
      <DashboardNavbar />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>
            <Outlet />
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
