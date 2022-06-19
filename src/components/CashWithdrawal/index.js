import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updatedBalance = value => {
    this.setState(prevsState => ({balance: prevsState.balance - value}))
  }

  render() {
    const {balance} = this.state

    const {denominationsList} = this.props

    const name = 'Sarah Williams'

    const firstWord = name.slice(0, 1)

    return (
      <div className="cash-withdrawal-container">
        <div className="cash-withdrawal-card-container">
          <div className="user-details-container">
            <div className="name-container">
              <p className="first-word">{firstWord}</p>
            </div>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <p className="amount">
              {balance}
              <br />
              <span className="rupees">In Rupees</span>
            </p>
          </div>
          <p className="with-draw">Withdraw</p>
          <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-lists">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationDetails={eachDenomination}
                key={eachDenomination.id}
                updatedBalance={this.updatedBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
