import './App.scss';

import Navigation from '../common/Navigation/Navigation';
import Footer from '../page/Footer/Footer';
import MainBoard from '../page/MainBoard/MainBoard';
import Shop from '../page/Shop/Shop';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Blog from './../common/Blog/Blog';
function App() {
  return (
    <BrowserRouter>
    <div className="App container-fluid background--white">
      <Navigation/>
      <Routes>
        <Route path="/" element={
            <MainBoard />
        } />
        <Route path="/shop" element={
          <Shop />
        }
        />
      </Routes>
    </div>
    <Blog/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
