import React, { Component } from 'react';
import { Link } from 'react-router';

class SideMenu extends Component {
  render() {
    let pathname = window.location.pathname;
    return (
        <div>
          <br/>
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <Link to="/users" className={`nav-link ${pathname.indexOf('/users') !== -1 ? "active" : ""}`}>Utenti</Link>
              <Link to="/search" className={`nav-link ${pathname === '/search' ? "active" : ""}`}>Ricerca</Link>
              <Link to="/search-list" className={`nav-link ${pathname === '/search-list' ? "active" : ""}`}>Lista di ricerche</Link>
          </div>
        </div>
    );
  }
}

export default SideMenu;
