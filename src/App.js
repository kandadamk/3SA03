import React from 'react';
import Cmpcard from './Cmpcard';
import Start from './Start';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash';
 
const message = 'ADVANCE'
 
const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    counter: 1,
    guess: [],
    completed: false,
    check: 0
  }
}
 
class App extends React.Component {
 
  state = {
    show: false,
    give_up: false
  }
 state = prepareStateFromWord(message);
  click = (value) => {
    let guess = [...this.state.guess, value]
    this.setState({ guess })
    if (guess.length === this.state.chars.length) {
      if (guess.join('').toString() === this.state.word) {
        this.setState({ guess: [], completed: true })
      } else {
        this.setState({ guess: [], counter: this.state.counter + 1 })
      }
    }
  }
  show_name = () =>{
    this.setState({
      show: !this.state.show
    })
    console.log(this.state.show)
  }
  reset = ()=>{
    this.setState({
      check: this.state.check+1, completed: false
    })
  }
  give_ups = ()=>{
    this.setState({
      give_up: !this.state.give_up
    })
  }
  render() {
    let test = this.state.completed === false ? '' : <button className="button" onClick={this.reset}><h2>Want to play again ?</h2></button>;
    let ans = this.state.completed === false ? '' : <h4 className="well">Excellent This word is "{message}"</h4>;
    let tests = this.state.completed === false ? '' : <h2 class="result"> You are winner </h2>; 
    return (
      <div>
        <div> <Start /> </div>
        <div className=""><h2 className="Textname">Create by Kanda 6035512030</h2> </div>
        {
          Array.from(this.state.chars).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              click={this.click}
              number={this.state.counter}
              check={this.state.check}
            />
          ))
        }
        <div>
          <h2 className="play"> Can play 3 times </h2>
        </div>
        {
          Array.from(this.state.guess).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              click={this.click}
            />
          ))
        }
        <div>
          <Cmpcard check_count={this.state.counter}/>
        </div> 
        <div>
          {test}
          {ans}
          {tests}
        </div>
      </div>
    )
  }
}
 
export default App;
