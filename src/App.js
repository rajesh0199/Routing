import './App.css';
import Footer from './Routing/Footer';
import Header from './Routing/Header';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Homepage from './Routing/Homepage';
import Aboutpage from './Routing/Aboutppage';
import Contactpage from './Routing/Contactspage';
import Pagenotfound from './Routing/Pagenotfound';
import Productslist from './Routing/Productslist'
import Mobilelist from './Routing/Mobilelist';
import Laptoplist from './Routing/Laptoplist';
import Infomobile from './Routing/Infomobile'
import Otherpage from "./Routing/Otherpage"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element = {<Navigate to = "./contact"/>} />
        <Route path='home' element={<Homepage/>}/>
        <Route path='about' element={<Aboutpage/>}/>
        <Route path='contact' element={<Contactpage/>}/>
        <Route path='/*' element={<Pagenotfound/>}/>
        <Route path='/products' element={<Productslist/>}>
          <Route  path='mobile' element={<Mobilelist/>}>
            <Route path=':des' element= {<Infomobile/>}/>
          </Route>
          <Route path='laptop' element={<Laptoplist/>}/>
        </Route>
        <Route path='otherpage' element={<Otherpage/>}/>


      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
