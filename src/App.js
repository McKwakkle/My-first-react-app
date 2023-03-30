import logo from './logo.svg';
import './App.css';

function App() {
let name = 'Kellan'

const handleClick = () => {
  name = 'Wessel'
  console.log(name)
}

  return (
    <div className="App">
     <h1>My name is {name}</h1>
     <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;
