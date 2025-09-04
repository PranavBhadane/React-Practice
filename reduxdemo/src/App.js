import logo from './logo.svg';
import './App.css';
import store from './Redux/store';
import { Provider } from 'react-redux';
import CakeContainer from './Components/CakeContainer';



function App() {
  return (
    <>
      <Provider store = {store}>
        <div>
          <CakeContainer/>
        </div>
        </Provider>
    </>
  );
}

export default App;
