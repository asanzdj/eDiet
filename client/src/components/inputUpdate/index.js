import React from 'react';
import {Link} from 'react-router';
import ChangePassword from './updatePassword';
import ChangeMail from './updateMail';
import ChangeHeight from './updateHeight';
import DeleteUser from './deleteUser';

export default class InputUpdate extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="container">
        <ChangePassword id={this.props.id}/>
        <ChangeMail id={this.props.id}/>
        <ChangeHeight id={this.props.id}/>
        <DeleteUser id={this.props.id} redirectToLogin={this.props.navToLogin}/>
      </div>

    );
  }
}
