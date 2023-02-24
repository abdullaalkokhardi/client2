import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';
import Routers from './components/Routers';
import { BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
      <Header></Header>
      <Routers></Routers>
      <Footer></Footer>
      </BrowserRouter>
    </div>

  );
}

export default App;
