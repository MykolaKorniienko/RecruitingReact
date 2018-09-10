import React, { Component } from 'react';
import moment from 'moment';
import { getSearches } from '../actions/search';
import { connect } from 'react-redux';

class SearchList extends Component {
  componentWillMount() {
    this.props.getSearches();
  }

  renderSearches() {
    return this.props.search.all.map((search) => {
      return (
        <tr key={search.id}>
          <th scope="row">{search.id}</th>
          <td>{search.cliente}</td>
          <td>{search.titolo}</td>
          <td>{search.descrizione}</td>
          <td>{moment(search.data).format('d MMM, y, H:mm') }</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand h2">Ricerche</a>
        </nav>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Client</th>
                <th scope="col">Titolo</th>
                <th scope="col">Descrizione</th>
                <th scope="col">Data</th>
              </tr>
            </thead>
            <tbody>
              {this.renderSearches()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { search: state.search };
}

export default connect(mapStateToProps, { getSearches })(SearchList);
