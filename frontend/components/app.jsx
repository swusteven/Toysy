import React from 'react'
import { Route } from 'react-router-dom';
import NavContainer from './nav/nav_container';
import HeaderSection from './header_section/header_section';


export default () => (
  <div>
    <Route path="/" component={NavContainer} />
    <Route exact path="/" component={HeaderSection} />
  </div>
);
