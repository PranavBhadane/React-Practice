import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './app/store';
import CakeComponent from './CakeComponent';

function App() {
  return (
    <>
      <Provider store={store}>
        <CakeComponent/>
      </Provider>
    </>
  );
}

export default App;
