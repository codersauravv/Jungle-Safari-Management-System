
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Cards from './components/Cards';
import {Route, Routes} from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Admin from './components/Admin';
import Error from './components/Error';

import CarouselComp from './components/CarouselComp';

function App() {
  return (
      <>
      <Routes>
      <Route exact path='/' 
              element={
                <>
                  <Navbar></Navbar>
                  <CarouselComp></CarouselComp>
                  <Cards></Cards>
                  <Footer></Footer>
                </>
              }
      />
    <Route exact path='/about' element={<About/>} />
    <Route exact path='/contactus' element={<ContactUs/>} />
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/admin' element={<Admin/>} />
    <Route exact path='/user' element={<Login/>} />
    <Route path='*' element={<Error/>} />
 
        
  

      </Routes>
      </>
  );
}

export default App;
