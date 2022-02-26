import React from 'react'
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import HeaderSection from './header_section/header_section';


export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={HeaderSection} />
  </div>
);
