import logo from './logo.svg';
import './App.css';
import UserContextProvider,{UserContext} from './component/context/UserContext';
import User from './component/User'

function App() {
  return (
    <UserContextProvider>
      <User/>
    </UserContextProvider>
  );
}

export default App;
