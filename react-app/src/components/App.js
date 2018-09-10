import React from 'react';
import { Component } from 'react';
import SideMenu from './SideMenu';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row" id="content">
            <div className="col-3">
                <SideMenu />
            </div>
            <div className="col-9">
            {this.props.children}
            </div>
        </div>
      </div>
    );
  }
}