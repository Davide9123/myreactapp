import React from 'react';
import Post from './FacebookPost';

// PROPS


// JSX
class App extends React.Component {
  state={
    number1:0,
    number2:0,
    number3:0,
    number4:0,
    number5:0,
    number6:0,
    number7:0,
    number8:0,
    number9:0,
    number10:0,


  }
  increment= ()=>{
    this.setState({
      number1: this.state.number1 +1,
      number2: this.state.number2 +2,
      number3: this.state.number3 +3,
      number4: this.state.number4 +4,
      number5: this.state.number5 +5,
      number6: this.state.number6 +6,
      number7: this.state.number7 +7,
      number8: this.state.number8 +8,
      number9: this.state.number9 +9,
      number10: this.state.number10 +10,

    })
  }
  render(){ return (
    <div className="Container">
      {/* <h1>My React App</h1> */}
      
        {/* <Post author="Andrea" description="Che puzza"/>
        <Post author="Jim" description="Che puzza 2"/>
        <Post author="Bob" description="Che polpetta"/>
        <Post author="John" description="Che pizza è la vita?"/>
        <Post author="Bilal" description="Che bello"/> */}
      <h1>Counter: {this.state.number1}-{this.state.number2}-{this.state.number3}-{this.state.number4}-{this.state.number5}-{this.state.number6}-{this.state.number7}-{this.state.number8}-{this.state.number9}-{this.state.number10}</h1> <span>----</span>
      <button onClick={this.increment}>Aumenta</button>
    </div>
  );
}
}
export default App;