import './App.css';
import { useSelector } from 'react-redux'
import { Users } from './Users';
import { Dashboard } from './Dashboard';

function App() {
 const state = useSelector(state => state)
 console.log(state)
  return (
    <div className="App">
        <Users/>
        <Dashboard/>
    </div>
  );
}

export default App;
