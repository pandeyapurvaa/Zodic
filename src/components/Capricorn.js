import React from 'react';
import './aries.css';
import capricorn from '../components/images/capricorn.png'
function Capricorn()
{
    return(<>
 <div className="zodic">
    <div className="logo">
    <img src={capricorn}/>
    </div>
    <div className="Name">-----Capricorn-----</div>
    <div className="Element">Element-Earth</div>
    <div className="description"><p>
    <font>Strengths:</font>  responsible, disciplined, self-control, good managers</p>
   <p> <font>Weaknesses:</font> know-it-all, unforgiving, condescending, expecting the worst</p>
    </div>
 </div>
</>);
}
export default Capricorn ;