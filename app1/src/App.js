import './App.css';
import { useSelector } from 'react-redux'
import { Users } from './Users';
import { Dashboard } from './Dashboard';

function App() {

  return (
    <div className="App">
        <Users/>
        <Dashboard/>
    </div>
  );
}

export default App;
