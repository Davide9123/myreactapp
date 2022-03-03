import React from 'react';
import Post from './FacebookPost';

// PROPS


// JSX
class App extends React.Component {
  render(){ return (
    <div className="Container">
      {/* <h1>My React App</h1> */}
      
        {/* <Post author="Andrea" description="Che puzza"/>
        <Post author="Jim" description="Che puzza 2"/>
        <Post author="Bob" description="Che polpetta"/>
        <Post author="John" description="Che pizza è la vita?"/>
        <Post author="Bilal" description="Che bello"/> */}
      <h3>Counter: {4}</h3> <span>----</span>
      <button>Aumenta</button>
    </div>
  );
}
}
export default App;