import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Transaction from './Transactions';

class accountInfo extends Component {
  state = {  }
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
            <Transaction/>
            <Link className="btn btn-primary" to="/users" >Back to List of Users</Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch)
}
export default connect(mapStateToProps,  mapDispatchToProps)(accountInfo);
