import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments() {
  const [comments, setComment] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComment(data))
  }, [])

  return (
    <div className="">
      <h2>Comments:{comments.length}</h2>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props) {
  return (
    <div className="">
      <h4>Email:{props.email}</h4>
      <p>Body:{props.body}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  const hadleIncrease = () => setCount(count + 1);
  const hadleDecrease = () => setCount(count - 1);

  return (
    <div className="">
      <h1>Counter:{count}</h1>
      <button onClick={hadleIncrease}>InCrease</button>
      <button onClick={hadleDecrease} >Decrease</button>
    </div>
  )
}

export default App;
