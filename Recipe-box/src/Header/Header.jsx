import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <h1 className="header__title">My Recipe Manager</h1>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
