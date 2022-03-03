import React,{useState} from 'react';
import Post from './FacebookPost';

// PROPS


// JSX
// ! Class component
// class App extends React.Component {
//   state={
//     number:0,
   
//   }
//   increment= ()=>{
//     this.setState({
//       number: this.state.number +1,
     

//     })
//   }
//   render(){ return (
//     <div className="Container">
//       {/* <h1>My React App</h1> */}
      
        
//       <h1>Counter: {this.state.number}</h1> 
//       <button onClick={this.increment}>Aumenta</button>
//     </div>
//   );
// }
// }
//! Function Component
function App(){
  const[posts,setPosts]=useState([
    {author:'Andrea' , description:'Imparo react'},
    {author:'Andrea' , description:'Imparo react 2'},
    {author:'Andrea' , description:'Imparo react forse'}

  ]);
  
    return (
      <div className="Container">
         {posts.map(post =>(
           <Post author={post.author} description={post.description}/>
         ))}     
      </div>
    );
  }

export default App;