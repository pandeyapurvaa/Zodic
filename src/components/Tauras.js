import React from 'react';
import './aries.css';
import taurus from '../components/images/taurus.png'
function Tauras()
{
    return(<>
 <div className="zodic">
    <div className="logo">
    <img src={taurus}/>
    </div>
    <div className="Name">-----Taurus-----</div>
    <div className="Element">Element-Earth</div>
    <div className="description"><p>
    <font>Strengths:</font> reliable, patient, practical, devoted, responsible, stable</p>
   <p> <font>Weaknesses:</font>stubborn, possessive, uncompromising</p>
    </div>


 </div>
        

</>);
}
export default Tauras ;