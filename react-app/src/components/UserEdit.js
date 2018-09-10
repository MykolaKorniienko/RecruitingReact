import React, { Component } from 'react';

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      cognome: '',
      email: '',
      eta: '',
      sesso: '', 
      nascitaPaese: '',
      nascitaData: '',
      nazionalita: '',
      formazioneScolastico: '',
      technologie: '',
      dataColloquio:  '',
      residenzaComune:  ''
    }
  }

  render() {
    return (
        <div>
            <p> user edit working !</p>
        </div>
    );
  }
}

export default UserEdit;
