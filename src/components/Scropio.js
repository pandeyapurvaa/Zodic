import React from 'react';
import './aries.css';
import scorpio from '../components/images/scorpio.png'
function Scorpio()
{
    return(<>
 <div className="zodic">
    <div className="logo">
    <img src={scorpio}/>
    </div>
    <div className="Name">-----Scorpio-----</div>
    <div className="Element">Element-Water</div>
    <div className="description"><p>
    <font>Strengths:</font> resourceful, brave, passionate, stubborn, a true friend</p>
   <p> <font>Weaknesses:</font> distrusting, jealous, secretive, violent</p>
    </div>
 </div>
</>);
}
export default Scorpio ;