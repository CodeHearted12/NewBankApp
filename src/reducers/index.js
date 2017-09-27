import { USER_SELECTED, ACCOUNT_SELECTED, WITHDRAW_FUNDS } from "../actions/index";
import listing from "../data/users";
import update from 'immutability-helper';

const initialState = {
  users: listing(),
  selectedUser: null,
  selectedAccount: null
};

const reducers = function(state = initialState, action) {

  switch (action.type) {
    case USER_SELECTED:
        return update(state, {
            selectedUser: {
                $set: action.payload
            }
        });

    case ACCOUNT_SELECTED:
        return update(state, {
            selectedAccount: {
                $set: action.payload
            }
        });

    case WITHDRAW_FUNDS:
        const userIdx = state.users.findIndex(user => user._id === state.selectedUser._id);
        const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);

        return update(state, {
            users: {
              [userIdx]: {
                accounts: {
                    [accountIdx]: {
                        balance: {
                            $apply: function(balance) {
                                return balance - action.payload
                          }
                        }
                      }
                    }
                  }
               }

             })
    default:
        return state;
  }
}

export default reducers;
