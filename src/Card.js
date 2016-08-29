
import React from 'react'

class Card extends React.Component {
  handleClick = () => {
    this.props.flipCard(this.props.index)
  }

  render () {
    const direction = this.props.up ? 'up' : 'down'
    switch(direction){
    case 'down' : return <div onClick={this.handleClick} className={`card ${direction}`}><img src='./images/default.jpg'/></div>
    break
    case 'up': return <div onClick={this.handleClick} className={`card ${direction}`}><img src={this.props.value}/></div>
  }
}
}

export default Card
