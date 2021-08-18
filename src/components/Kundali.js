import React from 'react';
import './style.css';
import About from './About';
import Aries from './Aries';
import Tauras from './Tauras';
import Gemini from './Gemini';
import Cancer from './Cancer';
import Leo from './Leo';
import Virgo from './Virgo';
import Libra from './Libra';
import Scropio from './Scropio';
import Sagittarius from './Sagittarius';
import Capricorn from './Capricorn';
import Aquarius from './Aquarius';
import Pisces from './Pisces';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
function Kundali()
{
    return(<>
   <div className="card">
       <div className="Choose"><h5> Choose Your Sign</h5> </div>
     <div className="Signs">
      <Router> 
       <div className="one">
           <Link to= "">Home</Link>
           <Link to="/Aries">Aries</Link>
           <Link to="/Tauras">Taurus</Link>
           <Link to="/Gemini">Gemini</Link>
           <Link to="/Cancer">Cancer</Link>
           </div> 
       <div className="one">
       <Link to="/Leo">Leo</Link>
       <Link to="/Virgo">Virgo</Link>
       <Link to="/Libra">Libra</Link>
       <Link to="/Scorpio">Scorpio</Link>
       </div>
       <div className="one">
       <Link to="/Sagittarius">Sagittarius</Link>
       <Link to="/Capricorn">Capricorn</Link>
       <Link to="/Aqarius">Aquarius</Link>
       <Link to="/Pisces">Pisces</Link>
       </div>
       <Route exact path="/"component={About}/>
        <Route path="/Aries"component={Aries}/>
        <Route path="/Tauras"component={Tauras}/>
        <Route path="/Gemini"component={Gemini}/>
        <Route path="/Cancer"component={Cancer}/>
        <Route path="/Leo"component={Leo}/>
        <Route path="/Virgo"component={Virgo}/>
        <Route path="/Libra"component={Libra}/>
        <Route path="/Scorpio"component={Scropio}/>
        <Route path="/Sagittarius"component={Sagittarius}/>
        <Route path="/Capricorn"component={Capricorn}/>
        <Route path="/Aqarius"component={Aquarius}/>
        <Route path="/Pisces"component={Pisces}/>
        
      

       </Router> 
     </div>
   </div>

    </>);
}
export default Kundali ;