import React from "react";
// import styled from "styled-components";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipableViews from 'react-swipeable-views';
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
const styles = {
  tabs: {
    background: '#fff',
  },
  slide: {
    padding: 15,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    // backgroundColor: '#6AC0FF',
  },
};

class Layout extends React.Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div>
        {/* a swipable views version with tabs, probably not using this as its no longer being developed with hooks */}
        <Tabs value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
          <Tab label="tab n°1"/>
          <Tab label="tab n°2"/>
          <Tab label="tab n°3"/>
        </Tabs>
        <SwipableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>opening</div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>commencement</div>
          <MapboxGLMap/>
        </SwipableViews>
      </div>
    )
  }
}

export default Layout;
