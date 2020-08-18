import React from "react";
// import styled from "styled-components";
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import SwipableViews from 'react-swipeable-views';
import { MapboxGLMap } from ".";

// const Header = styled("header")`
//   width: 100vw;
//   height: 100px;
//   background-color: grey;
//   opacity: 0.5;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Layout = () => {
  return (
    <>
      {/* <Header>
        <h1>*.*</h1>
      </Header> */}
      <main>
        <MapboxGLMap/> 
      </main>
    </>
  );
};

export default Layout;
