import React from 'react'
import './style.sass'
import Card from './Card'
const SHOW_CARD = 2000

const cardArray = [
  "./images/photo1.jpg", "./images/photo2.jpg", "./images/photo3.jpg", "./images/photo4.jpg", "./images/photo5.jpg", "./images/photo6.jpg", "./images/photo7.jpg", "./images/photo8.jpg"
]
class App extends React.Component {

  constructor () {
    super()
    this.state = {
      cards: cardArray.concat(cardArray),
      matched: [],
      turned: [],
      win: false
    }
  }
  flipCard = (index) => {
    const { turned, cards } = this.state
    if (turned.length < 2) {
      this.setState({
        turned: turned.concat(index)
      }, () => {
        if (this.state.turned.length === 2) {
          if (cards[this.state.turned[0]] === cards[this.state.turned[1]]) {
            this.setState({
              matched: this.state.matched.concat(...this.state.turned),
              turned: []
            }, () => {
              if (this.state.matched.length === cards.length) {
                setTimeout(() => {
                  this.setState({ win: true })
                }, SHOW_CARD/2)
              }
            })
          } else {
            setTimeout(() => {
              this.setState({ turned: [] })
            }, SHOW_CARD)
          }
        }
      })
    }
  }

  render () {
    if (!this.state.win) {
      const cards = this.state.cards.map((card, index) => {
        const up = !this.state.turned.includes(index) ? this.state.matched.includes(index) : this.state.turned.includes(index)
        return <Card flipCard={this.flipCard} value={card} up={up} index={index} key={index} />
      })
      return <div>
        <h1>"A good memory is one trained to forget the trivial." Clifton Fadiman</h1>
        <main>
          {cards}
        </main>
      </div>
    } else {
      return <div className='win'>
        <h1> YOU WIN!!! </h1>
        <img src='./images/winner.jpg'/>
      </div>
    }
  }
}

export default App
