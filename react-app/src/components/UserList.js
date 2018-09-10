import React, { Component } from 'react';
import { Link } from 'react-router';
import { getUsers } from '../actions/user';
import { connect } from 'react-redux';

class UserList extends Component {
  componentWillMount() {
    this.props.getUsers();
  }

  renderUsers() {
    return this.props.users.all.map((user) => {
      return (
        <li className="list-group-item" key={user.id}>
          <div className="row">
            <div className="col-10">
              <Link to={`users/${user.id}`}>{user.nome} {user.cognome}</Link>
            </div>
            <div className="col-2">
              <button type="button" className="btn text-danger" onClick={() => delete(user.id)}>Cancellare</button>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
              <a className="navbar-brand h2">Utenti</a>
              <form className="form-inline">
                <Link to="users/add" className="btn btn-outline-success my-2 my-sm-0">Aggiungere nuova</Link>
              </form>
            </nav>
            <div>
              <ul className="list-group">
                {this.renderUsers()}
              </ul>
            </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, { getUsers })(UserList);
