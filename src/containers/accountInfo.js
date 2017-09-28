import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Transactions from './Transactions';

class accountInfo extends Component {
  //state = {  }
  render() {
    if(!this.props.account) {
      return (
        <div>Please select an account...</div>
      )
    }
    return (

      <div className="col-md-6">
        <div className= "card">
          <div className= "card-block">
            <h4 className= "card-title">Account Information</h4>
            <h6 className= "card-subtitle mb-4 text-muted">{this.props.user.name}</h6>
            <h6 className= "card-subtitle mb-5 text-muted">{this.props.account.accountType}</h6>
            <div className= "card-text">
              <div>{this.props.account.balance}</div>
            </div>
            <Transactions/>
            <Link className="btn btn-primary" to="/users" >Back to List of Users</Link>
          </div>
        </div>
      </div>
      );
  }
}

function mapStateToProps(state) {
  const userId = state.users.findIndex(user => user._id === state.selectedUser);
  const accountId = state.users[userId].accounts.findIndex(account => account.id === state.selectedAccount);
  return {
    account: state.users[userId].accounts[accountId],
  user: state.users[userId]
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps) (accountInfo);
