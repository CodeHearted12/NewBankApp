import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectUser} from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

class listing extends Component {
  render() {
    let users = this.props.users.map((user) => {
      return (
        <li key={user._id} className="list-group-item" onClick={() => this.props.selectUser(user._id)}>
          <Link to={`/users/${user._id}`}>{user.name}</Link>
        </li>
      )
    })
    return (
      <div>
        <h5>Active accounts:</h5>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {users: state.users}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(listing)
