import React, {Component} from 'react'
import './ThankYou.css'
import thanks from '../../assets/thanks.gif'


class ThankYou extends Component{
  render(){
    return(
      <div className="thank-you">
        <img
          role="presentation"
          src={ thanks }
        />
        <h3>Thank you for your purchase!</h3>
      </div>
    )
  }
}




export default ThankYou
