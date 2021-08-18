import React from 'react';
import './aries.css';
import aqarius from '../components/images/aqarius.png'
function Aquarius()
{
    return(<>
 <div className="zodic">
    <div className="logo">
    <img src={aqarius}/>
    </div>
    <div className="Name">-----Aquarius-----</div>
    <div className="Element">Element-Air</div>
    <div className="description"><p>
    <font>Strengths:</font> Progressive, original, independent, humanitarian</p>
   <p> <font>Weaknesses:</font>  Runs from emotional expression, temperamental, uncompromising, aloof</p>
    </div>
 </div>
</>);
}
export default Aquarius ;