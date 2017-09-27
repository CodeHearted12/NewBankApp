import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { bindActionCreators } from "redux";
import { withdrawFunds } from "../actions/index.js";
import { connect } from "react-redux";

class Transactions extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}Withdraw
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Make a withdrawal</ModalHeader>
          <ModalBody>
            Please select an amount you would like to withdraw from your account. Current
            balance is: {this.props.account.balance}
          </ModalBody>
          <ModalFooter>
            <Button
              color="first"
              onClick={e => {
                this.toggle();
                return this.props.withdrawFunds(5);
              }}>
              $5
            </Button>
            <Button
              color="second"
              onClick={e => {
                this.toggle();
                return this.props.withdrawFunds(35);
              }}>
              $35
            </Button>
            <Button
              color="success"
              onClick={e => {
                this.toggle();
                return this.props.withdrawFunds(50);
              }}>
              $50
            </Button>
            <Button color="danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
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
  return bindActionCreators(
    {
      withdrawFunds: withdrawFunds
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
