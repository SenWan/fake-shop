import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <h2 className='text-primary'>Hello Fake Shop</h2>
    </div>
  );
}

export default App;
